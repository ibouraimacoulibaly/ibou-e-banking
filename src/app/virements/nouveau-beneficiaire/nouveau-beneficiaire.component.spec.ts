import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauBeneficiaireComponent } from './nouveau-beneficiaire.component';

describe('NouveauBeneficiaireComponent', () => {
  let component: NouveauBeneficiaireComponent;
  let fixture: ComponentFixture<NouveauBeneficiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauBeneficiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
