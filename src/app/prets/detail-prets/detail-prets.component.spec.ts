import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPretsComponent } from './detail-prets.component';

describe('DetailPretsComponent', () => {
  let component: DetailPretsComponent;
  let fixture: ComponentFixture<DetailPretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
