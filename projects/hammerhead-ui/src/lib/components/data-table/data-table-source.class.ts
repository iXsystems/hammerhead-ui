import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { DataTableColumnConfig } from '../../interfaces';

export class DataTableSource<T = any> extends DataSource<T> {
    private readonly DATA_SOURCE_DESTROYED$ = new Subject<void>();

    public filterString$ = new BehaviorSubject<string>('');
    public sortColumn: DataTableColumnConfig = null;
    public sortColumn$ = new BehaviorSubject<DataTableColumnConfig>(this.sortColumn);
    public sortDirection: 'ascending' | 'descending' = 'ascending';

    private filteredData = combineLatest(this.DATA, this.filterString$.pipe(debounceTime(500)), this.sortColumn$).pipe(
        takeUntil(this.DATA_SOURCE_DESTROYED$),
        /* Keep track of sort column/direction */
        tap(([_, __, column]) => {
            if (column === null) {
                return;
            }
            if (this.sortColumn && this.sortColumn.property === column.property && this.sortDirection === 'ascending') {
                this.sortDirection = 'descending';
            } else if (
                this.sortColumn &&
                this.sortColumn.property === column.property &&
                this.sortDirection === 'descending'
            ) {
                this.sortColumn = null;
                this.sortDirection = 'ascending';
            } else if (this.sortColumn === null || this.sortColumn.property !== column.property) {
                this.sortColumn = column;
                this.sortDirection = 'ascending';
                return;
            }
        }),
        /* Filtering step */
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
                                          .indexOf(filter.toLowerCase()) > -1
                              ).length > 0
                  )
                : d
        ),
        /* Sorting step */
        map(data => {
            if (this.sortColumn === null) {
                return data;
            }
            data.sort((rowA, rowB) =>
                rowA[this.sortColumn.property] !== rowB[this.sortColumn.property] &&
                (this.sortDirection === 'ascending'
                    ? rowA[this.sortColumn.property] > rowB[this.sortColumn.property]
                    : rowA[this.sortColumn.property] < rowB[this.sortColumn.property])
                    ? 1
                    : -1
            );
            return data;
        }),
        /* Ensure all subscribers are sharing the same value */
        shareReplay(1)
    );

    constructor(private readonly DATA: Observable<T[]>) {
        super();
    }

    public connect(): Observable<T[]> {
        return this.filteredData;
    }

    public disconnect(): void {
        this.DATA_SOURCE_DESTROYED$.next();
    }
}
