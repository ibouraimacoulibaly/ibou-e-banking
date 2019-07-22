import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveIdentificationComponent } from './releve-identification.component';

describe('ReleveIdentificationComponent', () => {
  let component: ReleveIdentificationComponent;
  let fixture: ComponentFixture<ReleveIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
