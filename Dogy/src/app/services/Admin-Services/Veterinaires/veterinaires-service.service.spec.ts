import { TestBed } from '@angular/core/testing';

import { VeterinairesServiceService } from './veterinaires-service.service';

describe('VeterinairesServiceService', () => {
  let service: VeterinairesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinairesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
