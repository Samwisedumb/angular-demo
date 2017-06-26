import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './payment-detail.component';
import { PaymentService } from './payment.service'

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent
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
