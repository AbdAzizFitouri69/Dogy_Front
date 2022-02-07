import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDresseursComponent } from './admin-dresseurs.component';

describe('AdminDresseursComponent', () => {
  let component: AdminDresseursComponent;
  let fixture: ComponentFixture<AdminDresseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDresseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDresseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
