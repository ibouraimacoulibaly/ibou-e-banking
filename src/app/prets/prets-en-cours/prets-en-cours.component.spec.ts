import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretsEnCoursComponent } from './prets-en-cours.component';

describe('PretsEnCoursComponent', () => {
  let component: PretsEnCoursComponent;
  let fixture: ComponentFixture<PretsEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretsEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretsEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
