import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAnnoncesAddComponent } from './client-annonces-add.component';

describe('ClientAnnoncesAddComponent', () => {
  let component: ClientAnnoncesAddComponent;
  let fixture: ComponentFixture<ClientAnnoncesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAnnoncesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAnnoncesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
