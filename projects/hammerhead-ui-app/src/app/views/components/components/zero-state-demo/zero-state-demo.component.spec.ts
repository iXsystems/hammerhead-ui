import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HammerheadUiModule } from 'hammerhead-ui';
import { DemoExampleComponent } from 'projects/hammerhead-ui-app/src/app/components/shared/demo-example/demo-example.component';
import { DemoComponent } from 'projects/hammerhead-ui-app/src/app/components/shared/demo/demo.component';
import { ZeroStateDemoComponent } from './zero-state-demo.component';
import { MatSnackBarModule } from '@angular/material';

describe('ZeroStateDemoComponent', () => {
    let component: ZeroStateDemoComponent;
    let fixture: ComponentFixture<ZeroStateDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoComponent, DemoExampleComponent, ZeroStateDemoComponent],
            imports: [HammerheadUiModule, MatSnackBarModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZeroStateDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
