import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveImpressionComponent } from './releve-impression.component';

describe('ReleveImpressionComponent', () => {
  let component: ReleveImpressionComponent;
  let fixture: ComponentFixture<ReleveImpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveImpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
