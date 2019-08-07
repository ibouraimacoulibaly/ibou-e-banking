import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteOppositionComponent } from './carte-opposition.component';

describe('CarteOppositionComponent', () => {
  let component: CarteOppositionComponent;
  let fixture: ComponentFixture<CarteOppositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteOppositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteOppositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
