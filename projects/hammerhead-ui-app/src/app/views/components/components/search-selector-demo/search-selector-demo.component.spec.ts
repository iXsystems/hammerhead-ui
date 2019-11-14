import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectorDemoComponent } from './search-selector-demo.component';

describe('SearchSelectorDemoComponent', () => {
  let component: SearchSelectorDemoComponent;
  let fixture: ComponentFixture<SearchSelectorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSelectorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
