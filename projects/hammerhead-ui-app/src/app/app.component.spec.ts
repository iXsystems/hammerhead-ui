import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeViewComponent } from './views/home/home-view/home-view.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, HomeViewComponent, SideNavComponent, TopNavComponent],
            imports: [
                BrowserAnimationsModule,
                MarkdownModule.forRoot({ loader: HttpClient }),
                RouterTestingModule.withRoutes(ROUTES),
                SharedComponentsModule
            ],
            providers: [{ provide: HttpClient, useClass: HttpClientTestingModule }]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have closed sidenav by default'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.isSidenavOpen).toEqual(false);
    });
});
