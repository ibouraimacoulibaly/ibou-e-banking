import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxDetailsComponent } from './reseaux-details.component';

describe('ReseauxDetailsComponent', () => {
  let component: ReseauxDetailsComponent;
  let fixture: ComponentFixture<ReseauxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauxDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
