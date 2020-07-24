import { NgModule } from '@angular/core';
import { InvoicesShellComponent } from './components/invoices-shell/invoices-shell.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { CommonModule } from '@angular/common';
import { InvpocesApiService } from './services/invpoces-api.service';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoicesCountsComponent } from './components/invoices-counts/invoices-counts.component';
import { InvoicesSearchComponent } from './components/invoices-search/invoices-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoicesAddComponent } from './components/invoices-add/invoices-add.component';
import { InvoiceStatusComponent } from './components/invoice-status/invoice-status.component';

const components = [
  InvoicesShellComponent,
  InvoicesListComponent,
  InvoicesCountsComponent,
  InvoicesSearchComponent,
  InvoicesAddComponent,
  InvoiceStatusComponent,
];

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    components,
  ],
  exports: [
    components
  ],
  providers: [
    InvpocesApiService
  ]
})
export class InvoicesModule {

}
