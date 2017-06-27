import { Injectable } from '@angular/core';

import { Payment } from './payment'
import { PAYMENTS } from './mock-payments'

@Injectable()
export class PaymentService {
  getPayments(): Promise<Payment[]> {
    return Promise.resolve(PAYMENTS);
  }

  getPaymentsSlowly(): Promise<Payment[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getPayments()), 2000);
    });
  }
}
