import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudthreeComponent } from './crudthree.component';

describe('CrudthreeComponent', () => {
  let component: CrudthreeComponent;
  let fixture: ComponentFixture<CrudthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
