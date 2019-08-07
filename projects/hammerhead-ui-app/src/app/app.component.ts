import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, take, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public readonly sidenavMode$ = this.breakpointObserver
        .observe('(min-width: 1280px)')
        .pipe(map(result => (result.matches ? 'side' : 'over')));

    public isSidenavOpen = false;

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
        /* On app load, determine if the sidenav should be open (desktop) or closed (hand-held device) */
        this.sidenavMode$.pipe(take(1)).subscribe(mode => (this.isSidenavOpen = mode === 'side'));

        /* On smaller viewports, close the sidenav menu after navigation */
        combineLatest(this.router.events, this.sidenavMode$)
            .pipe(
                filter(
                    ([event, sidenavMode]) =>
                        event instanceof NavigationEnd && this.isSidenavOpen && sidenavMode === 'over'
                )
            )
            .subscribe(() => (this.isSidenavOpen = false));
    }
}
