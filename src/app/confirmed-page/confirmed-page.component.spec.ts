import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPageComponent } from './confirmed-page.component';

describe('ConfirmedPageComponent', () => {
  let component: ConfirmedPageComponent;
  let fixture: ComponentFixture<ConfirmedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
