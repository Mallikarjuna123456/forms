import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TworouterComponent } from './tworouter.component';

describe('TworouterComponent', () => {
  let component: TworouterComponent;
  let fixture: ComponentFixture<TworouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TworouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TworouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
