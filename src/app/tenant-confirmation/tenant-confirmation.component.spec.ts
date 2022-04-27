import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantConfirmationComponent } from './tenant-confirmation.component';

describe('TenantConfirmationComponent', () => {
  let component: TenantConfirmationComponent;
  let fixture: ComponentFixture<TenantConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
