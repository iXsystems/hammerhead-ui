import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home/home-view/home-view.component';

export const ROUTES: Routes = [
    { path: '', component: HomeViewComponent, pathMatch: 'full' },
    {
        path: 'components',
        loadChildren: () =>
            import('./views/components/components-view.module').then(module => module.ComponentsViewModule)
    },
    {
        path: 'services',
        loadChildren: () => import('./views/services/services-view.module').then(module => module.ServicesViewModule)
    }
];
