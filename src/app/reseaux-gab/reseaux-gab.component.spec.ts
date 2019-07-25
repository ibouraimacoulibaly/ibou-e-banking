import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxGabComponent } from './reseaux-gab.component';

describe('ReseauxGabComponent', () => {
  let component: ReseauxGabComponent;
  let fixture: ComponentFixture<ReseauxGabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauxGabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauxGabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
