import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeterinaireComponent } from './add-veterinaire.component';

describe('AddVeterinaireComponent', () => {
  let component: AddVeterinaireComponent;
  let fixture: ComponentFixture<AddVeterinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVeterinaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
