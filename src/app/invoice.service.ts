import { Injectable } from '@angular/core';
import { Invioce } from './invoice.model';
import { generate } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoices: Invioce[] = [];

  constructor() { }

  generateInvoice(count: number){

    this.invoices = []
    for(let i = 0; i< count; i++){
      const tempInvoice = new Invioce(i,"Olaf", "Olafson","olaf@olafson.com", 4.99)
      this.invoices.push(tempInvoice);
    }
    for(let e = 0; e < this.invoices.length; e++){
      console.log(this.invoices[e])
    }
    return this.invoices;
  }
}


