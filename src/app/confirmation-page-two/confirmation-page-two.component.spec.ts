import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationPageTwoComponent } from './confirmation-page-two.component';

describe('ConfirmationPageTwoComponent', () => {
  let component: ConfirmationPageTwoComponent;
  let fixture: ComponentFixture<ConfirmationPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
