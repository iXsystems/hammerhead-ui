import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../components/shared/shared-components.module';
import {
    ProximityDialogAComponent,
    ProximityDialogExampleAComponent
} from './components/proximity-dialog/examples/proximity-dialog-example-a/proximity-dialog-example-a.component';
import { ProximityDialogDemoComponent } from './components/proximity-dialog/proximity-dialog-demo.component';
import { ServicesOverviewComponent } from './components/services-overview/services-overview.component';
import { ROUTES_SERVICES_VIEW } from './services-view.routes';

export const SERVICE_DEMOS = [
    {
        id: 'proximity-dialog',
        name: 'Proximity Dialog Service'
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES_SERVICES_VIEW), SharedComponentsModule],
    declarations: [
        ProximityDialogAComponent,
        ProximityDialogDemoComponent,
        ProximityDialogExampleAComponent,
        ServicesOverviewComponent
    ],
    entryComponents: [ProximityDialogAComponent]
})
export class ServicesViewModule {}
