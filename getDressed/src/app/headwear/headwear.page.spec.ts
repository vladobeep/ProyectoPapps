import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwearPage } from './headwear.page';

describe('HeadwearPage', () => {
  let component: HeadwearPage;
  let fixture: ComponentFixture<HeadwearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadwearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadwearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
