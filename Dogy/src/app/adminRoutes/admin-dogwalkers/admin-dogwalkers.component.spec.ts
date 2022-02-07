import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogwalkersComponent } from './admin-dogwalkers.component';

describe('AdminDogwalkersComponent', () => {
  let component: AdminDogwalkersComponent;
  let fixture: ComponentFixture<AdminDogwalkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDogwalkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDogwalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
