import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitiationMotDePasseComponent } from './reinitiation-mot-de-passe.component';

describe('ReinitiationMotDePasseComponent', () => {
  let component: ReinitiationMotDePasseComponent;
  let fixture: ComponentFixture<ReinitiationMotDePasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitiationMotDePasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitiationMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
