import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtwoComponent } from './crudtwo.component';

describe('CrudtwoComponent', () => {
  let component: CrudtwoComponent;
  let fixture: ComponentFixture<CrudtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
