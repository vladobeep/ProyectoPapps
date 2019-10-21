import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantsPage } from './pants.page';

describe('PantsPage', () => {
  let component: PantsPage;
  let fixture: ComponentFixture<PantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
