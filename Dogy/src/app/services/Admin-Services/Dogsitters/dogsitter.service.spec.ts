import { TestBed } from '@angular/core/testing';

import { DogsitterService } from './dogsitter.service';

describe('DogsitterService', () => {
  let service: DogsitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
