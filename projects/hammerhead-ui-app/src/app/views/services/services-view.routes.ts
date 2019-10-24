import { Routes } from '@angular/router';
import { ProximityDialogDemoComponent } from './components/proximity-dialog/proximity-dialog-demo.component';
import { ServicesOverviewComponent } from './components/services-overview/services-overview.component';

export const ROUTES_SERVICES_VIEW: Routes = [
    {
        path: '',
        component: ServicesOverviewComponent,
        pathMatch: 'full'
    },
    {
        path: 'proximity-dialog',
        component: ProximityDialogDemoComponent
    }
];
