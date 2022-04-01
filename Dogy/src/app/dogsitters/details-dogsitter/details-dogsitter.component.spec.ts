import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDogsitterComponent } from './details-dogsitter.component';

describe('DetailsDogsitterComponent', () => {
  let component: DetailsDogsitterComponent;
  let fixture: ComponentFixture<DetailsDogsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDogsitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDogsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
