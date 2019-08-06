import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderCarteComponent } from './commander-carte.component';

describe('CommanderCarteComponent', () => {
  let component: CommanderCarteComponent;
  let fixture: ComponentFixture<CommanderCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanderCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
