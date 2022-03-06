import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAnnoncesComponent } from './client-annonces.component';

describe('ClientAnnoncesComponent', () => {
  let component: ClientAnnoncesComponent;
  let fixture: ComponentFixture<ClientAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
