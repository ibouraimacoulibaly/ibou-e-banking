import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersCompteComponent } from './vers-compte.component';

describe('VersCompteComponent', () => {
  let component: VersCompteComponent;
  let fixture: ComponentFixture<VersCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
