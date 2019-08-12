import { Component, Input } from '@angular/core';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';

@Component({
    selector: 'app-data-table-example-a',
    templateUrl: './data-table-example-a.component.html',
    styleUrls: ['./data-table-example-a.component.scss']
})
export class DataTableExampleAComponent {
    @Input() public config: DataTableConfig;
}
