import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { of } from 'rxjs';
import { SystemToken } from '../../data-table.dummy-data';

@Component({
    selector: 'app-data-table-example-c',
    template: `
        <mat-card class="mat-elevation-z4">
            <hh-data-table [config]="config"></hh-data-table>
        </mat-card>
    `
})
export class DataTableExampleCComponent {
    public readonly config: DataTableConfig<SystemToken> = {
        columns: [{ property: 'id', width: '112px' }, { property: 'token' }],
        data: of(DUMMY_TABLE_DATA.tokens),
        rowActions: [
            { id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) },
            { id: 'delete', actionText: 'Delete', actionColor: 'warn', onClick: this.onDelete.bind(this) }
        ],
        rowActionsWidth: '224px'
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }

    public onDelete(token: SystemToken): void {
        this.snackBar.open(`Are you sure you want to delete ${token.id}?`, 'DO IT', { duration: 3000 });
    }
}

const DUMMY_TABLE_DATA: { tokens: SystemToken[] } = {
    tokens: [
        { id: 'token-1', token: 'oQvACZi7yyNbzKEQ7H9t' },
        { id: 'token-2', token: 'oQvACZi7yyNbzKEQ7H9u' },
        { id: 'token-3', token: 'oQvACZi7yyNbzKEQ7H9v' },
        { id: 'token-4', token: 'oQvACZi7yyNbzKEQ7H9w' },
        { id: 'token-5', token: 'oQvACZi7yyNbzKEQ7H9x' }
    ]
};
