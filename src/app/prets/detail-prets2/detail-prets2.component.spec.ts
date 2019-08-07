import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrets2Component } from './detail-prets2.component';

describe('DetailPrets2Component', () => {
  let component: DetailPrets2Component;
  let fixture: ComponentFixture<DetailPrets2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPrets2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPrets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
