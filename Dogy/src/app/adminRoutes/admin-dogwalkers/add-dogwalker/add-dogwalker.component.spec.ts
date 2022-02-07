import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogwalkerComponent } from './add-dogwalker.component';

describe('AddDogwalkerComponent', () => {
  let component: AddDogwalkerComponent;
  let fixture: ComponentFixture<AddDogwalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDogwalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDogwalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
