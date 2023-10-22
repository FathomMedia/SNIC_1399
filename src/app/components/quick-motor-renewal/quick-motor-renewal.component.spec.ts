import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMotorRenewalComponent } from './quick-motor-renewal.component';

describe('QuickMotorRenewalComponent', () => {
  let component: QuickMotorRenewalComponent;
  let fixture: ComponentFixture<QuickMotorRenewalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickMotorRenewalComponent]
    });
    fixture = TestBed.createComponent(QuickMotorRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
