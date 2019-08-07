import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../../components/shared/shared-components.module';
import { ROUTES_COMPONENTS_VIEW } from './components-view.routes';
import { ComponentsOverviewComponent } from './components/components-overview/components-overview.component';
import { ZeroStateDemoComponent } from './components/zero-state-demo/zero-state-demo.component';

export const COMPONENT_DEMOS = [
    {
        id: 'zero-state',
        name: 'Zero State'
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES_COMPONENTS_VIEW), SharedComponentsModule],
    declarations: [ComponentsOverviewComponent, ZeroStateDemoComponent]
})
export class ComponentsViewModule {}
