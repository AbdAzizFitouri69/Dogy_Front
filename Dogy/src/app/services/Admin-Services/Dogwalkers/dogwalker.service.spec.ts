import { TestBed } from '@angular/core/testing';

import { DogwalkerService } from './dogwalker.service';

describe('DogwalkerService', () => {
  let service: DogwalkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogwalkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
