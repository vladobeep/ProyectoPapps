import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsPage } from './shirts.page';

describe('ShirtsPage', () => {
  let component: ShirtsPage;
  let fixture: ComponentFixture<ShirtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
