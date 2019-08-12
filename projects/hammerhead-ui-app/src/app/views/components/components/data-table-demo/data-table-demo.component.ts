import { Component } from '@angular/core';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { DUMMY_TABLE_DATA } from './data-table.dummy-data';

@Component({
    selector: 'app-data-table-demo',
    templateUrl: './data-table-demo.component.html',
    styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent {
    public readonly exampleAConfig: DataTableConfig = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: DUMMY_TABLE_DATA.tokens
    };
}
