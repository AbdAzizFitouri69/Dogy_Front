import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDogwalkerComponent } from './update-dogwalker.component';

describe('UpdateDogwalkerComponent', () => {
  let component: UpdateDogwalkerComponent;
  let fixture: ComponentFixture<UpdateDogwalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDogwalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDogwalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
