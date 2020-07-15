import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronagesComponent } from './patronages.component';

describe('PatronagesComponent', () => {
  let component: PatronagesComponent;
  let fixture: ComponentFixture<PatronagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
