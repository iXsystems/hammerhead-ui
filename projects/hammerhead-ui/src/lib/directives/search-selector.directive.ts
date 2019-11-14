import { Component, Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DataDialog, DisplayValuePair } from '../interfaces';
import { ProximityDialogService } from '../services/proximity-dialog/proximity-dialog.service';

@Directive({ selector: '[hhSearchSelector]', providers: [ProximityDialogService] })
export class SearchSelectorDirective {
    @Input('hhSearchSelector') public readonly options: any[] = [];
    @Input() public readonly hhSearchSelectorIsMulti = false;

    @Output() public readonly hhSearchSelection = new EventEmitter<any | any[]>();

    constructor(private proximityDialogService: ProximityDialogService, private el: ElementRef) {}

    @HostListener('click')
    public click(): void {
        this.proximityDialogService
            .open(SearchSelectorDialogComponent, this.el.nativeElement, {
                title: 'Selection search',
                options: this.options,
                isMulti: this.hhSearchSelectorIsMulti
            })
            .subscribe(selection => this.hhSearchSelection.emit(selection));
    }
}

@Component({
    selector: 'hh-source-selector-dialog',
    template: `
        <mat-card>
            <hh-search-selector
                [options]="data.options"
                [isMulti]="data.isMulti"
                [selectedOptions]="selections"
                (selection)="onSelection($event)"
            ></hh-search-selector>

            <mat-divider *ngIf="data.isMulti"></mat-divider>

            <section *ngIf="data.isMulti" fxLayoutAlign="end center" fxLayoutGap="12px" [style.margin-top.px]="16">
                <button mat-flat-button color="default" (click)="onClose.emit(null)">Cancel</button>
                <button mat-flat-button color="primary" (click)="onClose.emit(selections)">Select</button>
            </section>
        </mat-card>
    `
})
export class SearchSelectorDialogComponent implements DataDialog<DisplayValuePair[]> {
    public data: { options: DisplayValuePair[]; title: string; isMulti: boolean } = {
        options: [],
        title: 'Select',
        isMulti: false
    };
    public onClose = new EventEmitter<any | any[]>();

    public selections: DisplayValuePair[] = [];

    public onSelection(selection: DisplayValuePair): void {
        if (this.selections.some(sel => JSON.stringify(sel.value) === JSON.stringify(selection.value))) {
            this.selections = this.selections.filter(
                sel => JSON.stringify(sel.value) !== JSON.stringify(selection.value)
            );
        } else {
            this.selections.unshift(selection);
        }

        if (!this.data.isMulti) {
            this.onClose.emit(selection);
        }
    }
}
