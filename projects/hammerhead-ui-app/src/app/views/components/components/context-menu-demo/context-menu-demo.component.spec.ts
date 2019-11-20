import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuDemoComponent } from './context-menu-demo.component';

describe('ContextMenuDemoComponent', () => {
  let component: ContextMenuDemoComponent;
  let fixture: ComponentFixture<ContextMenuDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextMenuDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
