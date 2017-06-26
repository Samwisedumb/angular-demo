import { Injectable } from '@angular/core';

import { Payment } from './payment'
import { PAYMENTS } from './mock-payments'

@Injectable()
export class PaymentService {
  getPayments(): Payment[] {
    return PAYMENTS;
  }
}
