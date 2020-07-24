import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../../models/invoice.models';

@Component({
  selector: 'app-invoice-status',
  templateUrl: './invoice-status.component.html',
  styleUrls: ['./invoice-status.component.scss']
})
export class InvoiceStatusComponent {

  @Input()
  invoice: Invoice;

  constructor() { }

  get status(): string {
    return this.invoice.price >= 0.5 ? 'Uhradená' : 'Neuhradená';
  }

}
