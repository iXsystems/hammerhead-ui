import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, take } from 'rxjs/operators';

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

    constructor(private breakpointObserver: BreakpointObserver) {
        this.sidenavMode$.pipe(take(1)).subscribe(mode => (this.isSidenavOpen = mode === 'side'));
    }
}
