import { TestBed } from '@angular/core/testing';

import { Directiva22Service } from './directiva22.service';

describe('Directiva22Service', () => {
  let service: Directiva22Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Directiva22Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
