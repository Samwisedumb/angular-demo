import { Component } from '@angular/core';

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

  constructor(private paymentService: PaymentService) {
    this.newPayment();
  }

  onSubmit() {
    this.submitted = true;
    this.paymentService.createNewPayment(this.model);
  }

  newPayment(): void {
    this.submitted = false;
    this.model = { amount: null, date: null};
  }
}
