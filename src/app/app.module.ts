import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { PaymentService } from './payments/shared/payment.service'

import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './payments/payment-detail.component';
import { PaymentsComponent } from './payments/payments.component'
import { PaymentFormComponent } from './payments/payment-form.component'

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentsComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'payments', component: PaymentsComponent
      },
      {
        path: 'newPayment', component: PaymentFormComponent
      }
    ])
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
