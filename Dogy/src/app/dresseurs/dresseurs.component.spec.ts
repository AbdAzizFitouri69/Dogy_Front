import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseursComponent } from './dresseurs.component';

describe('DresseursComponent', () => {
  let component: DresseursComponent;
  let fixture: ComponentFixture<DresseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DresseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DresseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
