import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecuriteComponent } from './info-securite.component';

describe('InfoSecuriteComponent', () => {
  let component: InfoSecuriteComponent;
  let fixture: ComponentFixture<InfoSecuriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecuriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
