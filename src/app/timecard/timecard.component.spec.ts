import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abhi3Component } from './timecard.component';

describe('Abhi3Component', () => {
  let component: Abhi3Component;
  let fixture: ComponentFixture<Abhi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abhi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abhi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
