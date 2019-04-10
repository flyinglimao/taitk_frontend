import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: NewsInfoComponent;
  let fixture: ComponentFixture<NewsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
