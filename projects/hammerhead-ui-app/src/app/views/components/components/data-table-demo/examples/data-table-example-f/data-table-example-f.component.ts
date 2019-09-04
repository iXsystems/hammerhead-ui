import { Component } from '@angular/core';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { of } from 'rxjs';
import { SystemToken } from '../../data-table.dummy-data';

@Component({
    selector: 'app-data-table-example-f',
    template: `
        <mat-card class="mat-elevation-z4">
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
        </mat-card>
    `
})
export class DataTableExampleFComponent {
    public readonly config: DataTableConfig<SystemToken> = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: of(DUMMY_TABLE_DATA.tokens)
    };
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
