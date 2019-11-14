import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { DisplayValuePair } from '../../interfaces';

@Component({
    selector: 'hh-search-selector',
    templateUrl: './search-selector.component.html',
    styleUrls: ['./search-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSelectorComponent {
    @Input() public readonly options: DisplayValuePair[] = [];
    @Input() public readonly selectedOptions: DisplayValuePair[] = [];
    @Input() public readonly isMulti: boolean = false;
    @Output() public readonly selection = new EventEmitter<DisplayValuePair>();

    public readonly filterControl = new FormControl('');
    public options$ = this.filterControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map(filterString =>
            this.options.filter(
                option =>
                    JSON.stringify(option)
                        .toLowerCase()
                        .indexOf(filterString.trim().toLowerCase()) > -1
            )
        )
    );

    public isOptionSelected(option: DisplayValuePair): boolean {
        return this.selectedOptions.some(opt => JSON.stringify(opt.value) === JSON.stringify(option.value));
    }
}
