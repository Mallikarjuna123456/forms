import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudoneComponent } from './crudone.component';

describe('CrudoneComponent', () => {
  let component: CrudoneComponent;
  let fixture: ComponentFixture<CrudoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
