import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreerouterComponent } from './threerouter.component';

describe('ThreerouterComponent', () => {
  let component: ThreerouterComponent;
  let fixture: ComponentFixture<ThreerouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreerouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreerouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
