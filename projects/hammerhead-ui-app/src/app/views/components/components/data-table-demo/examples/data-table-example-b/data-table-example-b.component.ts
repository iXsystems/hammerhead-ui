import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { BehaviorSubject, combineLatest, interval } from 'rxjs';
import { debounceTime, skip, filter } from 'rxjs/operators';
import { SystemToken } from '../../data-table.dummy-data';

const DUMMY_TABLE_DATA: { tokens: SystemToken[] } = {
    tokens: [
        { id: 'token-1', token: 'oQvACZi7yyNbzKEQ7H9t' },
        { id: 'token-2', token: 'oQvACZi7yyNbzKEQ7H9u' },
        { id: 'token-3', token: 'oQvACZi7yyNbzKEQ7H9v' },
        { id: 'token-4', token: 'oQvACZi7yyNbzKEQ7H9w' },
        { id: 'token-5', token: 'oQvACZi7yyNbzKEQ7H9x' }
    ]
};

@Component({
    selector: 'app-data-table-example-b',
    template: `
        <div fxLayoutAlign="center center" [style.padding.px]="12">
            <button mat-flat-button color="primary" (click)="onRefresh()">
                <div fxLayoutAlign="center center" fxLayoutGap="6px">
                    <mat-icon>refresh</mat-icon>
                    <span>Refresh</span>
                </div>
            </button>
        </div>
        <hh-data-table *ngIf="!isRefreshing" [config]="config"></hh-data-table>
    `
})
export class DataTableExampleBComponent {
    private readonly DATA = new BehaviorSubject<SystemToken[]>(DUMMY_TABLE_DATA.tokens);

    public readonly config: DataTableConfig<SystemToken> = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: this.DATA.pipe(debounceTime(2000)),
        rowActions: [{ id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) }]
    };

    public isRefreshing = false;

    constructor(private snackBar: MatSnackBar) {
        setTimeout(() => this.DATA.next([...DUMMY_TABLE_DATA.tokens, { id: 'new-token-6', token: '<token>' }]), 6000);
    }

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }

    public onRefresh(): void {
        this.isRefreshing = true;
        setTimeout(() => (this.isRefreshing = false), 0);
    }
}
