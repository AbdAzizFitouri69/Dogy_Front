import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDresseurComponent } from './add-dresseur.component';

describe('AddDresseurComponent', () => {
  let component: AddDresseurComponent;
  let fixture: ComponentFixture<AddDresseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDresseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
