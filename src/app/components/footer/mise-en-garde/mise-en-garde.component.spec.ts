import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnGardeComponent } from './mise-en-garde.component';

describe('MiseEnGardeComponent', () => {
  let component: MiseEnGardeComponent;
  let fixture: ComponentFixture<MiseEnGardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiseEnGardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseEnGardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
