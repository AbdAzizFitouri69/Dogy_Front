import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkersComponent } from './dog-walkers.component';

describe('DogWalkersComponent', () => {
  let component: DogWalkersComponent;
  let fixture: ComponentFixture<DogWalkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogWalkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
