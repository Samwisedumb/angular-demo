import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { PaymentService } from './payments/shared/payment.service'

import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './payments/payment-detail.component';
import { PaymentsComponent } from './payments/payments.component'

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
