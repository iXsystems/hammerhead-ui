import {
    Component,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContextmenuItem } from '../interfaces/contextmenu-item.interface';

interface ContextmenuData {
    menuItems: ContextmenuItem[];
    entity: any;
}

@Directive({ selector: '[hhContextmenu]', providers: [MatDialog] })
export class ContextmenuDirective {
    public static readonly BACKDROP_CLASS = 'hh-contextmenu-backdrop';

    @Input('hhContextmenu') public readonly entity: any;
    // tslint:disable-next-line: no-input-rename
    @Input('hhContextmenuItems') public readonly menuItems: ContextmenuItem[];

    @HostListener('contextmenu', ['$event'])
    public onRightClick(event: MouseEvent): void {
        /* Prevent OS context menu from opening */
        event.preventDefault();

        const dialogRef = this.dialog.open(ContextmenuDialogComponent, {
            data: { menuItems: this.menuItems, entity: this.entity },
            position: { top: `${event.pageY}px`, left: `${event.pageX}px` },
            panelClass: 'hh-contextmenu-panel',
            backdropClass: ContextmenuDirective.BACKDROP_CLASS,
            minWidth: '188px'
        });

        const destroyed$ = new Subject<void>();

        merge(
            dialogRef.afterClosed(),
            dialogRef.componentInstance.onClose,
            fromEvent(document.getElementsByClassName(ContextmenuDirective.BACKDROP_CLASS).item(0), 'contextmenu')
        )
            .pipe(takeUntil(destroyed$))
            .subscribe(() => {
                destroyed$.next();
                dialogRef.close();
            });
    }

    constructor(private dialog: MatDialog, private el: ElementRef) {
        this.el.nativeElement.style.cursor = 'context-menu';
    }
}

@Component({
    selector: 'hh-contextmenu-dialog',
    styles: [
        `
            .hh-contextmenu-panel mat-dialog-container {
                padding: 4px !important;
            }

            .contextmenu-list {
                padding-top: 0 !important;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-action-list class="contextmenu-list">
            <div
                *ngFor="let item of data.menuItems"
                class="mat-list-item"
                [style.padding]="'0 4px'"
                (click)="item.onClick(data.entity, $event); onClose.emit()"
                fxLayoutAlign="start center"
                fxLayoutGap="8px"
            >
                <mat-icon *ngIf="item.icon">{{ item.icon }}</mat-icon>
                <p>{{ item.label }}</p>
            </div>
        </mat-action-list>
    `
})
export class ContextmenuDialogComponent {
    public onClose = new EventEmitter<void>();

    constructor(@Inject(MAT_DIALOG_DATA) public readonly data: ContextmenuData) {}
}
