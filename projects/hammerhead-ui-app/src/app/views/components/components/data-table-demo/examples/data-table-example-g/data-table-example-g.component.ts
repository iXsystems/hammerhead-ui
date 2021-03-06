import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { of } from 'rxjs';
import { SystemToken } from '../../data-table.dummy-data';

@Component({
    selector: 'app-data-table-example-g',
    template: `
        <mat-card class="mat-elevation-z4">
            <hh-data-table [config]="config" [zeroStateTemplate]="zeroState">
                <ng-template #zeroState>
                    <div fxLayoutAlign="center center">
                        <hh-zero-state
                            [style.width.px]="320"
                            message="Custom zero state message"
                            [hasAction]="true"
                            (doAction)="onZeroStateAction()"
                        ></hh-zero-state>
                    </div>
                </ng-template>
            </hh-data-table>
        </mat-card>
    `
})
export class DataTableExampleGComponent {
    public readonly config: DataTableConfig<SystemToken> = {
        columns: [{ property: 'id' }, { property: 'token' }],
        data: of([]),
        hasGlobalFilter: true
    };

    constructor(private snackBar: MatSnackBar) {}

    public onZeroStateAction(): void {
        this.snackBar.open(`Where'd your data go?`, undefined, { duration: 3000 });
    }
}
