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
    selector: 'app-data-table-example-f',
    template: `
        <hh-data-table [config]="config" [headerTemplate]="headerCellTemplate" [cellTemplate]="dataCellTemplate">
            <!-- "col" is a DataTableColumnConfig object -->
            <ng-template #headerCellTemplate let-col>
                <p class="no-margin-bottom">Custom {{ col?.property | titlecase }} Header</p>
            </ng-template>

            <!-- "data" = { col: DataTableColumnConfig; row: SystemToken } -->
            <ng-template #dataCellTemplate let-data>
                {{ (data?.row)[(data?.col?.property)] | uppercase }}
            </ng-template>
        </hh-data-table>
    `
})
export class DataTableExampleFComponent {
    public readonly config: DataTableConfig<SystemToken> = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: of(DUMMY_TABLE_DATA.tokens)
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }
}
