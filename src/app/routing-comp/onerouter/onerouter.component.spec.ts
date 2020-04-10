import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerouterComponent } from './onerouter.component';

describe('OnerouterComponent', () => {
  let component: OnerouterComponent;
  let fixture: ComponentFixture<OnerouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnerouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnerouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
