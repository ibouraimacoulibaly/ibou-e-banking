import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPretsComponent } from './nouveau-prets.component';

describe('NouveauPretsComponent', () => {
  let component: NouveauPretsComponent;
  let fixture: ComponentFixture<NouveauPretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
