import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
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
    selector: 'app-data-table-example-a',
    template: '<hh-data-table [config]="config"></hh-data-table>'
})
export class DataTableExampleAComponent {
    public readonly config: DataTableConfig = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: DUMMY_TABLE_DATA.tokens,
        rowActions: [{ id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) }]
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }
}