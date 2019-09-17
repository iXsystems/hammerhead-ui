import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { DataTableColumnConfig, DataTableConfig } from '../../interfaces';
import { DataTableSource } from './data-table-source.class';
import { dataTableAnimations, MasterDetailState } from './data-table.animations';

@Component({
    selector: 'hh-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
    animations: [dataTableAnimations.masterDetailSlide]
})
export class DataTableComponent implements OnInit, OnChanges {
    private static readonly DETAIL_TOGGLE_COLUMN_WIDTH = '36px';
    public readonly DEFAULT_TABLE_HEIGHT = 'auto';
    public readonly DEFAULT_CUSTOM_ATTRIBUTE = 'hh-data-table-element';

    @Input() public config: DataTableConfig;
    @Input() public headerTemplate: TemplateRef<any>;
    @Input() public cellTemplate: TemplateRef<any>;
    @Input() public cellTemplates: { [columnProp: string]: TemplateRef<any> } = {};
    @Input() public detailsTemplate: TemplateRef<any>;
    @Input() public zeroStateTemplate: TemplateRef<any>;

    public cols: string[] = [];
    public data: DataTableSource;
    public details: any = null;
    public masterDetailState = MasterDetailState.MasterShow;
    public inputFilterString = '';

    public ngOnInit(): void {
        this.updateTable();
    }

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

    public getColumn(columnName: string): DataTableColumnConfig {
        return this.config.columns.find(col => col.property === columnName);
    }

    public getColumnWidth(columnProperty: string): string | undefined {
        if (columnProperty === 'actions') {
            return this.config.rowActionsWidth;
        }

        if (columnProperty === 'details') {
            return DataTableComponent.DETAIL_TOGGLE_COLUMN_WIDTH;
        }

        const column = this.config.columns.find(col => col.property === columnProperty);
        return column ? column.width : undefined;
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

    public toggleSort(column: DataTableColumnConfig): void {
        if (!column.isSortable) {
            return;
        }

        this.data.sortColumn$.next(column);
    }

    private buildColumns(): string[] {
        let cols = this.config.columns.map(column => column.property);
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
    }
}
