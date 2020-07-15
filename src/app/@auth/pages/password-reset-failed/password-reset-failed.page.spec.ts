import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetFailedPage } from './password-reset-failed.page';

describe('PasswordResetFailedPage', () => {
  let component: PasswordResetFailedPage;
  let fixture: ComponentFixture<PasswordResetFailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetFailedPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetFailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
