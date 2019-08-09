import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauVirementComponent } from './nouveau-virement.component';

describe('NouveauVirementComponent', () => {
  let component: NouveauVirementComponent;
  let fixture: ComponentFixture<NouveauVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
