import { Component } from '@angular/core';

import { Payment } from './shared/payment'

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./forms.css']
})
export class PaymentFormComponent {
  model: Payment = { amount: 0, date: new Date()};

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}