import { Component, OnInit } from '@angular/core';
import { InvpocesApiService } from '../../services/invpoces-api.service';
import { Observable } from 'rxjs';
import { Invoice } from '../../models/invoice.models';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {

  invoices$: Observable<Invoice[]>;

  constructor(
    private invoicesService: InvpocesApiService
  ) { }

  ngOnInit() {
    this.invoices$ = this.invoicesService.invoices$;
  }

}
