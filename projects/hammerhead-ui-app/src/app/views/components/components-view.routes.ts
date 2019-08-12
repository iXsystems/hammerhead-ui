import { Routes } from '@angular/router';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { DataTableDemoComponent } from './components/data-table-demo/data-table-demo.component';
import { ZeroStateDemoComponent } from './components/zero-state-demo/zero-state-demo.component';

export const ROUTES_COMPONENTS_VIEW: Routes = [
    {
        path: '',
        component: ComponentsOverviewComponent,
        pathMatch: 'full'
    },
    {
        path: 'zero-state',
        component: ZeroStateDemoComponent
    },
    {
        path: 'data-table',
        component: DataTableDemoComponent
    }
];
