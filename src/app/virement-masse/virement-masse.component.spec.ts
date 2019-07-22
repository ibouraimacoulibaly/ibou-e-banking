import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementMasseComponent } from './virement-masse.component';

describe('VirementMasseComponent', () => {
  let component: VirementMasseComponent;
  let fixture: ComponentFixture<VirementMasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementMasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementMasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
