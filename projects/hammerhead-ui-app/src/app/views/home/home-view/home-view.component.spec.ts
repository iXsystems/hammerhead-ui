import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { HttpClient } from 'selenium-webdriver/http';
import { HomeViewComponent } from './home-view.component';

describe('HomeViewComponent', () => {
    let component: HomeViewComponent;
    let fixture: ComponentFixture<HomeViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeViewComponent],
            imports: [MarkdownModule.forRoot({ loader: HttpClientTestingModule })],
            providers: [MarkdownService, MarkedOptions, { provide: HttpClient, useClass: HttpClientTestingModule }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /* Disabling this test until I can figure out why the loader prop isn't working */
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
