import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccouplementComponent } from './accouplement.component';

describe('AccouplementComponent', () => {
  let component: AccouplementComponent;
  let fixture: ComponentFixture<AccouplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccouplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccouplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
