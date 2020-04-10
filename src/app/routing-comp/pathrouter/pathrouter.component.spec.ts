import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathrouterComponent } from './pathrouter.component';

describe('PathrouterComponent', () => {
  let component: PathrouterComponent;
  let fixture: ComponentFixture<PathrouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathrouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
