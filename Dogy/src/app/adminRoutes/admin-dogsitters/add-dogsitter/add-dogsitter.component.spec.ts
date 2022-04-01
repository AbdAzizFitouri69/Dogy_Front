import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogsitterComponent } from './add-dogsitter.component';

describe('AddDogsitterComponent', () => {
  let component: AddDogsitterComponent;
  let fixture: ComponentFixture<AddDogsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDogsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDogsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
