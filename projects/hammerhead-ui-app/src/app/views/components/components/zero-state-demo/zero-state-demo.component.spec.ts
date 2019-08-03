import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroStateDemoComponent } from './zero-state-demo.component';

describe('ZeroStateDemoComponent', () => {
  let component: ZeroStateDemoComponent;
  let fixture: ComponentFixture<ZeroStateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroStateDemoComponent ]
    })
    .compileComponents();
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
