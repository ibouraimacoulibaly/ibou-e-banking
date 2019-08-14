import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContenuComponent } from './message-contenu.component';

describe('MessageContenuComponent', () => {
  let component: MessageContenuComponent;
  let fixture: ComponentFixture<MessageContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
