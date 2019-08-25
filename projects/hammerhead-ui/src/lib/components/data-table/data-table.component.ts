import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { DataTableColumnConfig, DataTableConfig } from '../../interfaces';
import { DataTableSource } from './data-table-source.class';

@Component({
    selector: 'hh-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
    private static readonly DETAIL_TOGGLE_COLUMN_WIDTH = '76px';
    @Input() public config: DataTableConfig;
    @Input() public headerTemplate: TemplateRef<any>;
    @Input() public cellTemplate: TemplateRef<any>;
    @Input() public detailsTemplate: TemplateRef<any>;
    @Input() public zeroStateTemplate: TemplateRef<any>;

    public cols: string[] = [];
    public data: DataTableSource;
    public details: any = null;

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
    }

    public onViewDetails(row: any): void {
        this.details = { ...row };
    }

    public toggleSort(column: DataTableColumnConfig): void {
        if (!column.isSortable) {
            return;
        }

        this.data.sortColumn$.next(column);
    }

    private buildColumns(): string[] {
        let cols = this.config.columns.map(column => column.property);
        if (this.config.rowActions && Array.isArray(this.config.rowActions) && this.config.rowActions.length > 0) {
            cols = [...cols, 'actions'];
        }
        if (this.config.isMasterDetail) {
            cols = [...cols, 'details'];
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
