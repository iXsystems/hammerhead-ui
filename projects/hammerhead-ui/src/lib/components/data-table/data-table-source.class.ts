import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, map, shareReplay, takeUntil } from 'rxjs/operators';

export class DataTableSource<T = any> extends DataSource<T> {
    private readonly DATA_SOURCE_DESTROYED$ = new Subject<void>();

    public filterString = new BehaviorSubject<string>('');

    private filteredData = combineLatest(this.DATA, this.filterString.pipe(debounceTime(500))).pipe(
        takeUntil(this.DATA_SOURCE_DESTROYED$),
        map(toListOfElementsWithMatchingObjectValues),
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

/* Algorithm that searches an object's values for a matching string */
function toListOfElementsWithMatchingObjectValues(values: [any[], string]): any[] {
    const d = values[0];
    const filter = values[1];

    return filter && typeof filter === 'string' && filter.trim().length > 0
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
        : d;
}
