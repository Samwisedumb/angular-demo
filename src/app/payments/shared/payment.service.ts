import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Payment } from './payment'

@Injectable()
export class PaymentService {
  private server: string = 'http://localhost:8081';
  private getPaymentsUrl: string = this.server + '/get/payments/all';
  private postPaymentsUrl: string = this.server + '/post/payments';

  constructor(private http: Http) { }

  public getPayments(): Promise<Payment[]> {
    return this.http.get(this.getPaymentsUrl)
               .toPromise()
               .then(response => {
                 return response.json() as Payment[];
               });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
