import { Component, OnInit } from '@angular/core';
import { InvpocesApiService } from '../../services/invpoces-api.service';

import { Observable } from 'rxjs';
import { InvoicesCounts } from '../../models/invoice.models';

@Component({
  selector: 'app-invoices-shell',
  templateUrl: './invoices-shell.component.html',
  styleUrls: ['./invoices-shell.component.scss']
})
export class InvoicesShellComponent implements OnInit {

  constructor(
    private invoicesService: InvpocesApiService
  ) { }

  ngOnInit() {
    this.invoicesService.getAll();
  }

}
