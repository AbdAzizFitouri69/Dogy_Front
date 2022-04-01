import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogsittersComponent } from './admin-dogsitters.component';

describe('AdminDogsittersComponent', () => {
  let component: AdminDogsittersComponent;
  let fixture: ComponentFixture<AdminDogsittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDogsittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDogsittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
