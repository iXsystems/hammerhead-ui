import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { ZeroStateModule } from '../zero-state/zero-state.module';
import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
    let component: DataTableComponent;
    let fixture: ComponentFixture<DataTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HammerheadUiModule, ZeroStateModule],
            declarations: [DataTableComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataTableComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
