import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataset2019Component } from './dataset2019.component';

describe('Dataset2019Component', () => {
  let component: Dataset2019Component;
  let fixture: ComponentFixture<Dataset2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dataset2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dataset2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
