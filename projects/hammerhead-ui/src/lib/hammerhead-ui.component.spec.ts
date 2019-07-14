import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HammerheadUiComponent } from './hammerhead-ui.component';

describe('HammerheadUiComponent', () => {
  let component: HammerheadUiComponent;
  let fixture: ComponentFixture<HammerheadUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HammerheadUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HammerheadUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
