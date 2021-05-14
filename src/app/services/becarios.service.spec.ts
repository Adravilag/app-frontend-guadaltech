import { TestBed } from '@angular/core/testing';

import { BecariosService } from './becarios.service';

describe('BecariosService', () => {
  let service: BecariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BecariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
