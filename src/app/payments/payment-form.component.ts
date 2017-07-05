import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Payment } from './shared/payment'
import { PaymentService } from './shared/payment.service'

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./forms.css']
})
export class PaymentFormComponent {
  private model: Payment;
  private submitted = false;

  private paymentForm: FormGroup;

  constructor(private paymentService: PaymentService, private fb: FormBuilder) {
    this.createForm();
    this.newPayment();
  }

  private createForm() {
    this.paymentForm = this.fb.group({
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.model.amount = this.paymentForm.get('amount').value;
    this.model.date = this.paymentForm.get('date').value;
    this.paymentService.createNewPayment(this.model);
  }

  newPayment(): void {
    this.submitted = false;
    this.model = { amount: null, date: null};
  }
}
