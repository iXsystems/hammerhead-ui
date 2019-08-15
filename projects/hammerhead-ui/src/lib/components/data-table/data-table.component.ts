import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, shareReplay, takeUntil } from 'rxjs/operators';
import { DataTableConfig, DataTableColumnConfig } from '../../interfaces';

class DataTableSource extends DataSource<any> {
    private readonly DATA_SOURCE_DESTROYED$ = new Subject<void>();

    public filterString = new BehaviorSubject<string>('');

    private filteredData = combineLatest(this.DATA, this.filterString.pipe(debounceTime(400))).pipe(
        takeUntil(this.DATA_SOURCE_DESTROYED$),
        /* Algorithm that searches an object's values for a matching string */
        map(([d, filter]) =>
            filter && typeof filter === 'string' && filter.trim().length > 0
                ? d.filter(
                      dEl =>
                          Object.keys(dEl || {})
                              .map(key => dEl[key])
                              .filter(
                                  dElement =>
                                      dElement
                                          .toString()
                                          .toLowerCase()
                                          .indexOf(filter) > -1
                              ).length > 0
                  )
                : d
        ),
        shareReplay(1)
    );

    constructor(private readonly DATA: Observable<any[]>) {
        super();
    }

    public connect(): Observable<any[]> {
        return this.filteredData;
    }

    public disconnect(): void {
        this.DATA_SOURCE_DESTROYED$.next();
    }
}

@Component({
    selector: 'hh-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
    @Input() public config: DataTableConfig;
    @Input() public headerTemplate: TemplateRef<any>;
    @Input() public cellTemplate: TemplateRef<any>;

    public cols: string[] = [];
    public data: DataTableSource;

    public ngOnInit() {
        this.updateTable();
    }

    public ngOnChanges() {
        this.updateTable();
    }

    public applyFilter(filterString: string): void {
        if (this.data) {
            this.data.filterString.next(filterString);
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
