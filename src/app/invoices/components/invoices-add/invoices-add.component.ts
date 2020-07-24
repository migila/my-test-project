import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvpocesApiService } from '../../services/invpoces-api.service';

@Component({
  selector: 'app-invoices-add',
  templateUrl: './invoices-add.component.html',
  styleUrls: ['./invoices-add.component.scss']
})
export class InvoicesAddComponent implements OnInit {

  newInvoiceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private invoicesService: InvpocesApiService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.newInvoiceForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addInvoice() {
    const name = this.newInvoiceForm.get('name').value;
    if (!name) {
      return;
    }

    this.invoicesService.addInvoice(name);
    this.newInvoiceForm.reset();
  }

}
