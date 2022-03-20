import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDresseurComponent } from './details-dresseur.component';

describe('DetailsDresseurComponent', () => {
  let component: DetailsDresseurComponent;
  let fixture: ComponentFixture<DetailsDresseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDresseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
