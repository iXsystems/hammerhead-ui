import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ZeroStateComponent } from './zero-state.component';

describe('ZeroStateComponent', () => {
    let component: ZeroStateComponent;
    let fixture: ComponentFixture<ZeroStateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZeroStateComponent],
            imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatCardModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZeroStateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
