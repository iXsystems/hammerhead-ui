import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DisplayValuePair } from 'projects/hammerhead-ui/src/public-api';

@Component({
    selector: 'app-search-selector-example-b',
    template: `
        <p>Selections: {{ selected | json }}</p>
        <button
            mat-flat-button
            color="accent"
            [hhSearchSelector]="options"
            [hhSearchSelectorIsMulti]="true"
            [hhSearchSelectorSelected]="selected"
            [hhSearchSelectorTemplate]="customTemplate"
            (hhSearchSelection)="onSelection($event)"
            [style.margin.px]="24"
        >
            Select one or more
        </button>

        <ng-template #customTemplate let-data>
            <p>{{ data.display | uppercase }}</p>
        </ng-template>
    `
})
export class SearchSelectorExampleBComponent {
    public readonly options: DisplayValuePair[] = [
        {
            display: 'Aaron Ervin Really Long Name Sr.',
            value: { name: 'Aaron Ervin Really Long Name Sr.' }
        },
        {
            display: 'Ollie Poodle',
            value: { name: 'Ollie Poodle' }
        },
        {
            display: 'Rachel Shea',
            value: { name: 'Rachel Shea' }
        }
    ];

    public selected: DisplayValuePair[] = [];

    constructor(private snackBar: MatSnackBar) {}

    public onSelection(options: DisplayValuePair[]): void {
        this.selected = options || [];
        this.snackBar.open(
            options && options.length > 0 ? options.map(option => option.display).join(', ') : 'No selections',
            undefined,
            { duration: 3000 }
        );
    }
}
