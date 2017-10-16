import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abhi1Component } from './project.component';

describe('ProjectComponent', () => {
  let component: Abhi1Component;
  let fixture: ComponentFixture<Abhi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abhi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abhi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
