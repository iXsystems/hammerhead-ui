import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
    let component: TopNavComponent;
    let fixture: ComponentFixture<TopNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopNavComponent],
            imports: [MatIconModule, MatToolbarModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
