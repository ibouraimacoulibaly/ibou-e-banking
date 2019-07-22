import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersBeneficaireComponent } from './vers-beneficaire.component';

describe('VersBeneficaireComponent', () => {
  let component: VersBeneficaireComponent;
  let fixture: ComponentFixture<VersBeneficaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersBeneficaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersBeneficaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
