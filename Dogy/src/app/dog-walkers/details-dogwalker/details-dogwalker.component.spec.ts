import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDogwalkerComponent } from './details-dogwalker.component';

describe('DetailsDogwalkerComponent', () => {
  let component: DetailsDogwalkerComponent;
  let fixture: ComponentFixture<DetailsDogwalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDogwalkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDogwalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
