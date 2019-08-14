import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEnvoyeContenuComponent } from './message-envoye-contenu.component';

describe('MessageEnvoyeContenuComponent', () => {
  let component: MessageEnvoyeContenuComponent;
  let fixture: ComponentFixture<MessageEnvoyeContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEnvoyeContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEnvoyeContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
