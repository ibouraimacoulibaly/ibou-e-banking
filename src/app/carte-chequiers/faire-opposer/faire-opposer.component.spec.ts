import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireOpposerComponent } from './faire-opposer.component';

describe('FaireOpposerComponent', () => {
  let component: FaireOpposerComponent;
  let fixture: ComponentFixture<FaireOpposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaireOpposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireOpposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
