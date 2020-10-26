import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisplayValuePair } from 'projects/hammerhead-ui/src/public-api';

@Component({
    selector: 'app-search-selector-example-a',
    template: `
        <button
            mat-flat-button
            color="accent"
            [hhSearchSelector]="options"
            (hhSearchSelection)="onSelection($event)"
            [style.margin.px]="24"
        >
            Select
        </button>
    `
})
export class SearchSelectorExampleAComponent {
    public readonly options: DisplayValuePair[] = [
        {
            display: 'Aaron Ervin',
            value: { name: 'Aaron Ervin' }
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

    public onSelection(option: DisplayValuePair): void {
        this.snackBar.open(option ? option.display : 'No selection', undefined, { duration: 3000 });
    }
}
