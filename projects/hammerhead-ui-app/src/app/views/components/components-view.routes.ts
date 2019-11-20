import { Routes } from '@angular/router';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { DataTableDemoComponent } from './components/data-table-demo/data-table-demo.component';
import { SearchSelectorDemoComponent } from './components/search-selector-demo/search-selector-demo.component';
import { ZeroStateDemoComponent } from './components/zero-state-demo/zero-state-demo.component';
import { ContextMenuDemoComponent } from './components/context-menu-demo/context-menu-demo.component';

export const ROUTES_COMPONENTS_VIEW: Routes = [
    {
        path: '',
        component: ComponentsOverviewComponent,
        pathMatch: 'full'
    },
    {
        path: 'context-menu',
        component: ContextMenuDemoComponent
    },
    {
        path: 'data-table',
        component: DataTableDemoComponent
    },
    {
        path: 'search-selector',
        component: SearchSelectorDemoComponent
    },
    {
        path: 'zero-state',
        component: ZeroStateDemoComponent
    }
];
