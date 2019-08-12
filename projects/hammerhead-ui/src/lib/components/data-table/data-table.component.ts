import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { DataTableConfig } from '../../interfaces';

class DataTableSource extends DataSource<any> {
    public filterString = new BehaviorSubject<string>('');

    public data = new BehaviorSubject<any[]>(this.DATA);
    private filteredData = combineLatest(this.data, this.filterString.pipe(debounceTime(400))).pipe(
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
        )
    );

    constructor(private readonly DATA: any[]) {
        super();
    }

    public connect(): Observable<any[]> {
        return this.filteredData;
    }

    public disconnect(): void {
        this.data.complete();
    }
}

@Component({
    selector: 'hh-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {
    @Input() public config: DataTableConfig;

    public cols: string[] = [];
    public data: DataTableSource;

    public async ngOnInit() {
        await this.updateTable();
    }

    public async ngOnChanges() {
        await this.updateTable();
    }

    public applyFilter(filterString: string): void {
        if (this.data) {
            this.data.filterString.next(filterString);
        }
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

    private updateDataSync(): DataTableSource {
        return new DataTableSource(this.config.data);
    }

    private async updateDataAsync(): Promise<DataTableSource> {
        return new DataTableSource(
            await this.config
                .dataAsync()
                .pipe(
                    take(1),
                    map(data => (this.config.dataAsyncMapper ? this.config.dataAsyncMapper(data) : data))
                )
                .toPromise()
        );
    }

    private async updateTable() {
        this.cols = this.buildColumns();
        this.data = this.config.dataAsync ? await this.updateDataAsync() : this.updateDataSync();
    }
}
