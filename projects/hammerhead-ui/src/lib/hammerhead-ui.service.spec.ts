import { TestBed } from '@angular/core/testing';

import { HammerheadUiService } from './hammerhead-ui.service';

describe('HammerheadUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HammerheadUiService = TestBed.get(HammerheadUiService);
    expect(service).toBeTruthy();
  });
});
