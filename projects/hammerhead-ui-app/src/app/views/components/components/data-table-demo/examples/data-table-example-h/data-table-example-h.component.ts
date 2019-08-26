import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataTableConfig } from 'projects/hammerhead-ui/src/public-api';
import { of } from 'rxjs';

@Component({
    selector: 'app-data-table-example-h',
    template: `
        <mat-card class="mat-elevation-z4">
            <hh-data-table [config]="config" [detailsTemplate]="details">
                <ng-template #details let-data>
                    <div [style.min-height.px]="296">
                        <h3>Details</h3>
                        <p>{{ data | json }}</p>
                    </div>
                </ng-template>
            </hh-data-table>
        </mat-card>
    `,
    styles: [
        `
            mat-card {
                margin: 16px;
            }
        `
    ]
})
export class DataTableExampleHComponent {
    public readonly config: DataTableConfig = {
        columns: [
            { property: 'name', isSortable: true },
            { property: 'age', isSortable: true, width: '112px' },
            { property: 'company', isSortable: true },
            { property: 'email', isSortable: true }
        ],
        data: of(DUMMY_TABLE_DATA),
        rowActions: [{ id: 'edit', actionText: 'Edit', onClick: this.onEdit.bind(this) }],
        rowActionsWidth: '112px',
        isMasterDetail: true,
        hasGlobalFilter: true
    };

    constructor(private snackBar: MatSnackBar) {}

    public onEdit(person: any): void {
        this.snackBar.open(`You want to edit ${person.name}.`, undefined, { duration: 3000 });
    }
}

const DUMMY_TABLE_DATA = [
    {
        age: 23,
        name: 'Shields Cameron',
        gender: 'male',
        company: 'EXIAND',
        email: 'shieldscameron@exiand.com',
        phone: '+1 (804) 400-2621'
    },
    {
        age: 39,
        name: 'Johns Conley',
        gender: 'male',
        company: 'ISONUS',
        email: 'johnsconley@isonus.com',
        phone: '+1 (891) 557-3906'
    },
    {
        age: 27,
        name: 'Ayers Reeves',
        gender: 'male',
        company: 'CUIZINE',
        email: 'ayersreeves@cuizine.com',
        phone: '+1 (943) 483-2547'
    },
    {
        age: 23,
        name: 'Wynn Briggs',
        gender: 'male',
        company: 'MIRACULA',
        email: 'wynnbriggs@miracula.com',
        phone: '+1 (980) 556-3858'
    },
    {
        age: 25,
        name: 'Leon Mayo',
        gender: 'male',
        company: 'ENERVATE',
        email: 'leonmayo@enervate.com',
        phone: '+1 (963) 569-2753'
    }
];
