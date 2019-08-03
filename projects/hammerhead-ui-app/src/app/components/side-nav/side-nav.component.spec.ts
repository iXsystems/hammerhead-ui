import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { ROUTES } from '../../app.routes';
import { HomeViewComponent } from '../../views/home/home-view/home-view.component';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
    let component: SideNavComponent;
    let fixture: ComponentFixture<SideNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeViewComponent, SideNavComponent],
            imports: [
                BrowserAnimationsModule,
                MarkdownModule.forRoot({ loader: HttpClientTestingModule }),
                MatExpansionModule,
                MatListModule,
                RouterTestingModule.withRoutes(ROUTES)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
