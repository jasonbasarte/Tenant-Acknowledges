import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangeTenantComponent } from './manange-tenant.component';

describe('ManangeTenantComponent', () => {
  let component: ManangeTenantComponent;
  let fixture: ComponentFixture<ManangeTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangeTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManangeTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
