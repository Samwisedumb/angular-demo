import { Component, Input } from '@angular/core';
import { Payment } from './payment';

@Component({
  selector: 'payment-detail',
  templateUrl: './payment-detail.component.html',
})
export class PaymentDetailComponent {
  @Input() payment: Payment;
}
