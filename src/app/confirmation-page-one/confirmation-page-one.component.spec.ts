import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationPageOneComponent } from './confirmation-page-one.component';

describe('ConfirmationPageOneComponent', () => {
  let component: ConfirmationPageOneComponent;
  let fixture: ComponentFixture<ConfirmationPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
