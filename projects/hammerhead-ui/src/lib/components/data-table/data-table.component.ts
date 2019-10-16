import { Component, Input, OnChanges, TemplateRef } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataTableColumnConfig, DataTableConfig } from '../../interfaces';
import { DataTableSource } from './data-table-source.class';
import { dataTableAnimations, MasterDetailState } from './data-table.animations';

@Component({
    selector: 'hh-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
    animations: [dataTableAnimations.masterDetailSlide]
})
export class DataTableComponent implements OnChanges {
    private static readonly DETAIL_TOGGLE_COLUMN_WIDTH = '36px';
    private static readonly MULTI_SELECT_COLUMN_WIDTH = '36px';
    public readonly DEFAULT_TABLE_HEIGHT = 'auto';
    public readonly DEFAULT_CUSTOM_ATTRIBUTE = 'hh-data-table-element';

    @Input() public config: DataTableConfig;
    @Input() public headerTemplate: TemplateRef<any>;
    @Input() public cellTemplate: TemplateRef<any>;
    @Input() public cellTemplates: { [columnProp: string]: TemplateRef<any> } = {};
    @Input() public actionTemplates: { [actionId: string]: TemplateRef<any> } = {};
    @Input() public detailsTemplate: TemplateRef<any>;
    @Input() public zeroStateTemplate: TemplateRef<any>;

    public cols: string[] = [];
    public data: DataTableSource;
    public details: any = null;
    public masterDetailState = MasterDetailState.MasterShow;
    public inputFilterString = '';
    public areAllRowsSelected$: Observable<boolean>;
    public selectionCache = [];

    private rowSelectionEvents$ = new Subject<void>();

    public ngOnChanges(): void {
        this.updateTable();
    }

    public applyFilter(filterString: string): void {
        if (this.data) {
            this.data.filterString$.next(filterString);
        }
    }

    public clearFilters(): void {
        if (this.data) {
            this.data.filterString$.next('');
        }
    }

    public clearSelectionCache(): void {
        this.selectionCache = [];
        this.rowSelectionEvents$.next();
    }

    public deselectRow(row: any): void {
        if (this.config.isMultiSelect) {
            this.selectionCache = this.selectionCache.filter(
                r => this.config.trackByFn(0, r) !== this.config.trackByFn(0, row)
            );
            this.rowSelectionEvents$.next();
        }
    }

    public getColumn(columnName: string): DataTableColumnConfig {
        return this.config.columns.find(col => col.property === columnName);
    }

    public getColumnWidth(columnProperty: string): string | undefined {
        if (columnProperty === 'multi') {
            return DataTableComponent.MULTI_SELECT_COLUMN_WIDTH;
        }

        if (columnProperty === 'actions') {
            return this.config.rowActionsWidth;
        }

        if (columnProperty === 'details') {
            return DataTableComponent.DETAIL_TOGGLE_COLUMN_WIDTH;
        }

        const column = this.config.columns.find(col => col.property === columnProperty);
        return column ? column.width : undefined;
    }

    public isRowSelected(row: any, index: number): boolean {
        return this.selectionCache.some(r => this.config.trackByFn(index, r) === this.config.trackByFn(index, row));
    }

    public onQuitDetails(): void {
        this.details = null;
        this.masterDetailState = MasterDetailState.MasterShow;
    }

    public onRowSelection(row: any): void {
        if (this.config.isMasterDetail) {
            this.onViewDetails(row);
        }
    }

    public onViewDetails(row: any): void {
        this.details = { ...row };
        this.masterDetailState = MasterDetailState.DetailsShow;
    }

    public toggleRowSelection(row: any, index: number): void {
        if (this.isRowSelected(row, index)) {
            this.selectionCache = this.selectionCache.filter(
                (r, i) => this.config.trackByFn(i, r) !== this.config.trackByFn(index, row)
            );
        } else {
            this.selectionCache.splice(index, 0, row);
        }

        this.rowSelectionEvents$.next();
    }

    public toggleRowSelectionAll(): void {
        this.data
            .connect()
            .pipe(take(1))
            .subscribe(rows => {
                if (this.selectionCache.length < rows.length) {
                    this.selectionCache = rows;
                    return;
                }

                this.selectionCache = [];
            });
    }

    public toggleSort(column: DataTableColumnConfig): void {
        if (!column.isSortable) {
            return;
        }

        this.data.sortColumn$.next(column);
    }

    private buildColumns(): string[] {
        let cols = this.config.columns.map(column => column.property);
        if (this.config.isMultiSelect && Array.isArray(this.config.multiSelectActions)) {
            cols = ['multi', ...cols];
        }
        if (this.config.isMasterDetail) {
            cols = ['details', ...cols];
        }
        if (this.config.rowActions && Array.isArray(this.config.rowActions) && this.config.rowActions.length > 0) {
            cols = [...cols, 'actions'];
        }
        return cols;
    }

    private updateData(): DataTableSource {
        return new DataTableSource(this.config.data);
    }

    private updateTable() {
        this.cols = this.buildColumns();
        this.data = this.updateData();

        this.areAllRowsSelected$ = combineLatest(this.data.connect(), this.rowSelectionEvents$).pipe(
            map(([rows]) => rows.length === this.selectionCache.length)
        );
    }
}
