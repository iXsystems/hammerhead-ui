import { Component, EventEmitter } from '@angular/core';
import { MatButton, MatSnackBar } from '@angular/material';
import { DataDialog, ProximityDialogService } from 'projects/hammerhead-ui/src/public-api';

@Component({
    selector: 'app-proximity-dialog-example-a',
    template: `
        <section [style.padding.px]="16" fxLayoutAlign="center center">
            <button mat-flat-button color="accent" (click)="onOpenDialog(anchor)" #anchor>
                Open my dialog
            </button>
        </section>
    `,
    providers: [ProximityDialogService]
})
export class ProximityDialogExampleAComponent {
    constructor(private proximityDialogService: ProximityDialogService, private snackBar: MatSnackBar) {}

    public onOpenDialog(anchorEl: MatButton): void {
        this.proximityDialogService
            .open(ProximityDialogAComponent, anchorEl._elementRef.nativeElement)
            .subscribe(result =>
                this.snackBar.open(result ? 'You were sure!' : 'You were not sure...', undefined, {
                    duration: 2000
                })
            );
    }
}

@Component({
    selector: 'app-proximity-dialog-a',
    template: `
        <mat-card>
            <p>Are you sure you want to do this?</p>

            <section fxLayoutAlign="center center" fxLayoutGap="12px">
                <button mat-flat-button color="default" (click)="onClose.emit(false)">
                    Cancel
                </button>
                <button mat-flat-button color="primary" (click)="onClose.emit(true)">
                    Do it
                </button>
            </section>
        </mat-card>
    `
})
export class ProximityDialogAComponent implements DataDialog<boolean> {
    public onClose = new EventEmitter<boolean>();
}
