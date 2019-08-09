import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotTermeComponent } from './depot-terme.component';

describe('DepotTermeComponent', () => {
  let component: DepotTermeComponent;
  let fixture: ComponentFixture<DepotTermeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotTermeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotTermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
