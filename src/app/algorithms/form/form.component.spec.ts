import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: AlgorithmFormComponent;
  let fixture: ComponentFixture<AlgorithmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
