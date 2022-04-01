import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsittersComponent } from './dogsitters.component';

describe('DogsittersComponent', () => {
  let component: DogsittersComponent;
  let fixture: ComponentFixture<DogsittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
