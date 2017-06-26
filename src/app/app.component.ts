import { Component, OnInit } from '@angular/core';

import { Payment } from './payment';
import { PaymentService } from './payment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Payment App';
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
    this.payments = this.paymentService.getPayments();
  }
}
