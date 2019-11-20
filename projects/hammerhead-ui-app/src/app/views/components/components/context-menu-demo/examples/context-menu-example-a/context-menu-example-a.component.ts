import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ContextmenuItem } from 'projects/hammerhead-ui/src/lib/interfaces/contextmenu-item.interface';

@Component({
    selector: 'app-context-menu-example-a',
    template: `
        <mat-card>
            <mat-list>
                <mat-list-item *ngFor="let dog of dogs" [hhContextmenu]="dog" [hhContextmenuItems]="menuItems">
                    {{ dog }}
                </mat-list-item>
            </mat-list>
        </mat-card>
    `
})
export class ContextMenuExampleAComponent {
    public dogs = ['Bulldog', 'Lab', 'Mastiff', 'Schnauzer'];

    public menuItems: ContextmenuItem[] = [
        {
            label: 'Like',
            icon: 'thumb_up',
            onClick: dog => this.snackBar.open(`You like ${dog}s!`, undefined, { duration: 3000 })
        },
        {
            label: 'Dislike',
            icon: 'thumb_down',
            onClick: dog => this.snackBar.open(`Uh-oh, you don't like ${dog}s...`, undefined, { duration: 3000 })
        }
    ];

    constructor(private snackBar: MatSnackBar) {}
}
