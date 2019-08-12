import { DataSource } from '@angular/cdk/table';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataTableConfig } from '../../interfaces';

class DataTableSource extends DataSource<any> {
    public data = new BehaviorSubject<any[]>(this.DATA);

    constructor(private readonly DATA: any[]) {
        super();
    }

    public connect(): Observable<any[]> {
        return this.data;
    }

    public disconnect(): void {}
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

    private buildColumns(): string[] {
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
