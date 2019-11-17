import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerheadUiModule } from '../../hammerhead-ui.module';
import { SharedModule } from '../../shared.module';
import { SearchSelectorComponent } from './search-selector.component';

describe('SearchSelectorComponent', () => {
    let component: SearchSelectorComponent;
    let fixture: ComponentFixture<SearchSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, HammerheadUiModule, SharedModule],
            declarations: [SearchSelectorComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
