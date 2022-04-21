import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateOnsiteFormComponent } from './delegate-onsite-form.component';

describe('DelegateOnsiteFormComponent', () => {
  let component: DelegateOnsiteFormComponent;
  let fixture: ComponentFixture<DelegateOnsiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegateOnsiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateOnsiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
