import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoicesShellComponent } from './components/invoices-shell/invoices-shell.component';

const routes: Routes = [
  { path: '', component: InvoicesShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
