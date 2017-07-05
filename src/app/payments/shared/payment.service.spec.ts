import {fakeAsync, inject, TestBed} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response, RequestMethod} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { PaymentService } from "./payment.service";
import { Payment } from "./payment";

const mockPayments = [
  {
    _id: "58df0b6eb871fb811be65d2f",
    amount: 30,
    date: "2017-04-23T18:25:43.511Z"
  },
  {
    _id: "58df0b6eb871fb811be65d2f",
    amount: 100,
    date: "2017-07-1T18:25:43.511Z"
  },
  {
    _id: "58df0b6eb871fb811be65d2f",
    amount: 11,
    date: "2017-04-29T18:25:43.511Z"
  },
];

describe('PaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        PaymentService
      ]
    });
  });

  it("should return a Promise<Array<Payment>>",
    inject([PaymentService, XHRBackend], (paymentService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify({
            data: mockPayments
          })
        })));
      });
      paymentService.getPayments().then(payments => {
        expect(payments.length).toBe(3);
        expect(payments[0].amount).toBe(30);
        expect(payments[1].amount).toBe(100);
        expect(payments[2].amount).toBe(11);
      });
    })
  );

  it("should return a Payment",
    inject([PaymentService, XHRBackend], (paymentService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions()));
      });
      paymentService.createNewPayment(new Payment(92, new Date("12/21/2017")))
        .then(payment => {
          expect(payment.amount).toBe(92);
          expect(payment.date).toEqual(new Date("12/21/2017"));
        });
    })
  );
});
