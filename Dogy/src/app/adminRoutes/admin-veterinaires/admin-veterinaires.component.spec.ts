import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVeterinairesComponent } from './admin-veterinaires.component';

describe('AdminVeterinairesComponent', () => {
  let component: AdminVeterinairesComponent;
  let fixture: ComponentFixture<AdminVeterinairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVeterinairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVeterinairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
