import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-motor-renewal',
  templateUrl: './quick-motor-renewal.component.html',
  styleUrls: ['./quick-motor-renewal.component.scss'],
})
export class QuickMotorRenewalComponent {
  renewalForm = new FormGroup({
    plateNo: new FormControl('', Validators.required),
    cpr: new FormControl('', Validators.required),
  });

  handleSubmit(): void {
    // handle the form submission
    console.warn(
      '🚀 ~ file: quick-motor-renewal.component.ts:23 ~ QuickMotorRenewalComponent ~ handleSubmit ~ this.renewalForm.value:',
      this.renewalForm.value
    );
  }
}
