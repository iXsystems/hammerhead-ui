import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { COMPONENT_DEMOS } from '../../views/components/components-view.module';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    public componentDemos = COMPONENT_DEMOS;

    constructor(private router: Router) {}

    navigateToComponentDemo(component: string): void {
        this.router.navigateByUrl(`components/${component}`);
    }
}
