import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { ZeroStateModule } from 'hammerhead-ui';
import { DemoExampleComponent } from 'projects/hammerhead-ui-app/src/app/components/shared/demo-example/demo-example.component';
import { DemoComponent } from 'projects/hammerhead-ui-app/src/app/components/shared/demo/demo.component';
import { ProximityDialogDemoComponent } from './proximity-dialog-demo.component';

describe('ProximityDialogDemoComponent', () => {
    let component: ProximityDialogDemoComponent;
    let fixture: ComponentFixture<ProximityDialogDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoComponent, DemoExampleComponent, ProximityDialogDemoComponent],
            imports: [ZeroStateModule, MatSnackBarModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProximityDialogDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
