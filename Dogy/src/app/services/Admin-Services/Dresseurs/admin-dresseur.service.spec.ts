import { TestBed } from '@angular/core/testing';

import { AdminDresseurService } from './admin-dresseur.service';

describe('AdminDresseurService', () => {
  let service: AdminDresseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDresseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
