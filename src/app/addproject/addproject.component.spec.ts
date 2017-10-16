import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abhi2Component } from './addproject.component';

describe('AddprojectComponent', () => {
  let component: Abhi2Component;
  let fixture: ComponentFixture<Abhi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abhi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abhi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
