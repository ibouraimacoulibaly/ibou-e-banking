import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMotDePasseComponent } from './nouveau-mot-de-passe.component';

describe('NouveauMotDePasseComponent', () => {
  let component: NouveauMotDePasseComponent;
  let fixture: ComponentFixture<NouveauMotDePasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauMotDePasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
