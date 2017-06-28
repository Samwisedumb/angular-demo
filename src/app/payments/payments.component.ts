import { Component, OnInit } from '@angular/core';

import { Payment } from './shared/payment';
import { PaymentService } from './shared/payment.service'

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {
  selectedPayment: Payment;
  payments: Payment[];

  constructor(private paymentService: PaymentService) {}

  onSelect(payment: Payment): void {
    this.selectedPayment = payment;
  }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(): void {
    this.paymentService.getPayments().then(payments => this.payments = payments.sort(this.paymentOrdering));
  }

  private paymentOrdering(first: Payment, second: Payment): number {
    return first.date < second.date ? -1 : (first.date > second.date ? 1 : 0);
  }
}
