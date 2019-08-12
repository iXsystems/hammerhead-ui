import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../components/shared/shared-components.module';
import { ROUTES_COMPONENTS_VIEW } from './components-view.routes';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { DataTableDemoComponent } from './components/data-table-demo/data-table-demo.component';
import { DataTableExampleAComponent } from './components/data-table-demo/examples/data-table-example-a/data-table-example-a.component';
import { DataTableExampleBComponent } from './components/data-table-demo/examples/data-table-example-b/data-table-example-b.component';
import { DataTableExampleCComponent } from './components/data-table-demo/examples/data-table-example-c/data-table-example-c.component';
import { ZeroStateExample1Component } from './components/zero-state-demo/examples/zero-state-example-1/zero-state-example-1.component';
import { ZeroStateExample2Component } from './components/zero-state-demo/examples/zero-state-example-2/zero-state-example-2.component';
import { ZeroStateDemoComponent } from './components/zero-state-demo/zero-state-demo.component';

export const COMPONENT_DEMOS = [
    {
        id: 'data-table',
        name: 'Data Table'
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
        DataTableDemoComponent,
        DataTableExampleAComponent,
        DataTableExampleBComponent,
        DataTableExampleCComponent,
        ZeroStateDemoComponent,
        ZeroStateExample1Component,
        ZeroStateExample2Component
    ]
})
export class ComponentsViewModule {}
