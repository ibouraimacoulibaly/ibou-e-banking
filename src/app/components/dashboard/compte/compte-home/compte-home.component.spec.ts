import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteHomeComponent } from './compte-home.component';

describe('CompteHomeComponent', () => {
  let component: CompteHomeComponent;
  let fixture: ComponentFixture<CompteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
