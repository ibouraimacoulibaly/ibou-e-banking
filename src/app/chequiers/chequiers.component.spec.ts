import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequiersComponent } from './chequiers.component';

describe('ChequiersComponent', () => {
  let component: ChequiersComponent;
  let fixture: ComponentFixture<ChequiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
