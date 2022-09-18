import { TestBed } from '@angular/core/testing';

import { ScrollUpdateService } from './scroll-update.service';

describe('ScrollUpdateService', () => {
  let service: ScrollUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
