import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { DataTableColumnConfig, DataTableConfig, DataTableSortConfig } from '../../interfaces';
import { DataTableSource } from './data-table-source.class';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'hh-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
    @Input() public config: DataTableConfig;
    @Input() public headerTemplate: TemplateRef<any>;
    @Input() public cellTemplate: TemplateRef<any>;
    @Input() public zeroStateTemplate: TemplateRef<any>;

    public cols: string[] = [];
    public data: DataTableSource;

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

        const column = this.config.columns.find(col => col.property === columnProperty);
        return column ? column.width : undefined;
    }

    public toggleSort(column: DataTableColumnConfig): void {
        if (!column.isSortable) {
            return;
        }

        this.data.sortColumn$.next(column);
    }

    private buildColumns(): string[] {
        if (this.config.rowActions && Array.isArray(this.config.rowActions) && this.config.rowActions.length > 0) {
            return [...this.config.columns.map(column => column.property), 'actions'];
        }
        return this.config.columns.map(column => column.property);
    }

    private updateData(): DataTableSource {
        return new DataTableSource(this.config.data);
    }

    private updateTable() {
        this.cols = this.buildColumns();
        this.data = this.updateData();
    }
}
