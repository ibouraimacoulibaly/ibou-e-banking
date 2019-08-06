import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSmsComponent } from './code-sms.component';

describe('CodeSmsComponent', () => {
  let component: CodeSmsComponent;
  let fixture: ComponentFixture<CodeSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
