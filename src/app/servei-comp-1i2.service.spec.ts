import { TestBed } from '@angular/core/testing';

import { ServeiComp1i2Service } from './servei-comp-1i2.service';

describe('ServeiComp1i2Service', () => {
  let service: ServeiComp1i2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiComp1i2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
