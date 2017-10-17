import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardComponent } from './timecard.component';

describe('Abhi3Component', () => {
  let component: TimecardComponent ;
  let fixture: ComponentFixture<TimecardComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
