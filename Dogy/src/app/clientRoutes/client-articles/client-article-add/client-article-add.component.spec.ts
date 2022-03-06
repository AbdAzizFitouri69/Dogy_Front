import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientArticleAddComponent } from './client-article-add.component';

describe('ClientArticleAddComponent', () => {
  let component: ClientArticleAddComponent;
  let fixture: ComponentFixture<ClientArticleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientArticleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientArticleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
