import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySurveysComponent } from './mysurveys.component';

describe('MySurveysComponent', () => {
  let component: MySurveysComponent;
  let fixture: ComponentFixture<MySurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySurveysComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
