import { Component, OnInit } from '@angular/core';
import { InvpocesApiService } from '../../services/invpoces-api.service';
import { Observable } from 'rxjs';
import { InvoicesCounts } from '../../models/invoice.models';

@Component({
  selector: 'app-invoices-counts',
  templateUrl: './invoices-counts.component.html',
  styleUrls: ['./invoices-counts.component.scss']
})
export class InvoicesCountsComponent implements OnInit {

  invoicesCounts$: Observable<InvoicesCounts>;

  constructor(
    private invoicesService: InvpocesApiService
  ) { }

  ngOnInit() {
    this.invoicesCounts$ = this.invoicesService.invoicesCounts$;
  }

}
