import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDogsitterComponent } from './update-dogsitter.component';

describe('UpdateDogsitterComponent', () => {
  let component: UpdateDogsitterComponent;
  let fixture: ComponentFixture<UpdateDogsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDogsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDogsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
