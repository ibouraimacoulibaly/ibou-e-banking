import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemiseChequeComponent } from './remise-cheque.component';

describe('RemiseChequeComponent', () => {
  let component: RemiseChequeComponent;
  let fixture: ComponentFixture<RemiseChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemiseChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiseChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
