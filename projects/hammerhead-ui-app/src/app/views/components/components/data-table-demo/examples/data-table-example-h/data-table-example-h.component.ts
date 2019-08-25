import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { of } from 'rxjs';
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
    selector: 'app-data-table-example-h',
    template: `
        <hh-data-table [config]="config" [detailsTemplate]="details">
            <ng-template #details let-data>
                <h3>Details</h3>
                <p>{{ data | json }}</p>
            </ng-template>
        </hh-data-table>
    `
})
export class DataTableExampleHComponent {
    public readonly config: DataTableConfig<SystemToken> = {
        columns: [{ property: 'id', isSortable: true }, { property: 'token', isSortable: true }],
        data: of(DUMMY_TABLE_DATA.tokens),
        rowActions: [{ id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) }],
        isMasterDetail: true
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }
}
