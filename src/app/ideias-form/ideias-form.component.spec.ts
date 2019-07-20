import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiasFormComponent } from './ideias-form.component';

describe('IdeiasFormComponent', () => {
  let component: IdeiasFormComponent;
  let fixture: ComponentFixture<IdeiasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeiasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
