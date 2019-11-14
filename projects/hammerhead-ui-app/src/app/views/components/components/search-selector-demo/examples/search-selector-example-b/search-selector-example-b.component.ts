import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DisplayValuePair } from 'projects/hammerhead-ui/src/public-api';

@Component({
    selector: 'app-search-selector-example-b',
    template: `
        <button
            mat-flat-button
            color="accent"
            [hhSearchSelector]="options"
            [hhSearchSelectorIsMulti]="true"
            (hhSearchSelection)="onSelection($event)"
            [style.margin.px]="24"
        >
            Select one or more
        </button>
    `
})
export class SearchSelectorExampleBComponent {
    public readonly options: DisplayValuePair[] = [
        {
            display: 'Aaron Ervin',
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

    constructor(private snackBar: MatSnackBar) {}

    public onSelection(options: DisplayValuePair[]): void {
        this.snackBar.open(options ? options.map(option => option.display).join(', ') : 'No selections', undefined, {
            duration: 3000
        });
    }
}
