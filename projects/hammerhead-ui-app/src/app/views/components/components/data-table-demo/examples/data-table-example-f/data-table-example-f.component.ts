import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { SystemToken } from '../../data-table.dummy-data';

@Component({
    selector: 'app-data-table-example-f',
    template: '<hh-data-table [config]="config"></hh-data-table>'
})
export class DataTableExampleFComponent {
    public readonly config: DataTableConfig = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: [],
        rowActions: [{ id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) }]
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(token: SystemToken): void {
        this.snackBar.open(`You want to edit token ${token.id}.`, undefined, { duration: 3000 });
    }
}
