import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../components/shared/shared-components.module';
import { ROUTES_COMPONENTS_VIEW } from './components-view.routes';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { ContextMenuDemoComponent } from './components/context-menu-demo/context-menu-demo.component';
import { ContextMenuExampleAComponent } from './components/context-menu-demo/examples/context-menu-example-a/context-menu-example-a.component';
import { DataTableDemoComponent } from './components/data-table-demo/data-table-demo.component';
import { DataTableExampleAComponent } from './components/data-table-demo/examples/data-table-example-a/data-table-example-a.component';
import { DataTableExampleBComponent } from './components/data-table-demo/examples/data-table-example-b/data-table-example-b.component';
import { DataTableExampleCComponent } from './components/data-table-demo/examples/data-table-example-c/data-table-example-c.component';
import { DataTableExampleDComponent } from './components/data-table-demo/examples/data-table-example-d/data-table-example-d.component';
import { DataTableExampleEComponent } from './components/data-table-demo/examples/data-table-example-e/data-table-example-e.component';
import { DataTableExampleFComponent } from './components/data-table-demo/examples/data-table-example-f/data-table-example-f.component';
import { DataTableExampleGComponent } from './components/data-table-demo/examples/data-table-example-g/data-table-example-g.component';
import { DataTableExampleHComponent } from './components/data-table-demo/examples/data-table-example-h/data-table-example-h.component';
import { SearchSelectorExampleAComponent } from './components/search-selector-demo/examples/search-selector-example-a/search-selector-example-a.component';
import { SearchSelectorExampleBComponent } from './components/search-selector-demo/examples/search-selector-example-b/search-selector-example-b.component';
import { SearchSelectorDemoComponent } from './components/search-selector-demo/search-selector-demo.component';
import { ZeroStateExample1Component } from './components/zero-state-demo/examples/zero-state-example-1/zero-state-example-1.component';
import { ZeroStateExample2Component } from './components/zero-state-demo/examples/zero-state-example-2/zero-state-example-2.component';
import { ZeroStateDemoComponent } from './components/zero-state-demo/zero-state-demo.component';

export const COMPONENT_DEMOS = [
    {
        id: 'context-menu',
        name: 'Context Menu'
    },
    {
        id: 'data-table',
        name: 'Data Table'
    },
    {
        id: 'search-selector',
        name: 'Search Selector'
    },
    {
        id: 'zero-state',
        name: 'Zero State'
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES_COMPONENTS_VIEW), SharedComponentsModule],
    declarations: [
        ComponentsOverviewComponent,
        ContextMenuDemoComponent,
        ContextMenuExampleAComponent,
        DataTableDemoComponent,
        DataTableExampleAComponent,
        DataTableExampleBComponent,
        DataTableExampleCComponent,
        DataTableExampleDComponent,
        DataTableExampleEComponent,
        DataTableExampleFComponent,
        DataTableExampleGComponent,
        DataTableExampleHComponent,
        SearchSelectorDemoComponent,
        SearchSelectorExampleAComponent,
        SearchSelectorExampleBComponent,
        ZeroStateDemoComponent,
        ZeroStateExample1Component,
        ZeroStateExample2Component
    ]
})
export class ComponentsViewModule {}
