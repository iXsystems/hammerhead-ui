import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { DUMMY_TABLE_DATA, SystemToken } from '../../data-table.dummy-data';

@Component({
    selector: 'app-data-table-example-a',
    templateUrl: './data-table-example-a.component.html',
    styleUrls: ['./data-table-example-a.component.scss']
})
export class DataTableExampleAComponent {
    public readonly config: DataTableConfig = {
        columns: [{ property: 'id', width: '112px' }, { property: 'token' }],
        data: DUMMY_TABLE_DATA.tokens,
        rowActions: [{ id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) }],
        rowActionsWidth: '112px'
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }
}
