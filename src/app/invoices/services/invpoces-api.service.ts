import { Injectable } from '@angular/core';
import { Invoice, InvoicesCounts } from '../models/invoice.models';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class InvpocesApiService {

  invoices$: Observable<Invoice[]>;
  invoicesCounts$: Observable<InvoicesCounts>;

  private invoicesAll: Invoice[] = [];
  private invoicesFiltered: Invoice[] = [];
  private invoicesSubject: BehaviorSubject<Invoice[]>;
  private invoicesCountsSubject: BehaviorSubject<InvoicesCounts>;
  private filteredText: string;

  constructor() {
    this.invoicesSubject = new BehaviorSubject<Invoice[]>(this.invoicesFiltered);
    this.invoices$ = this.invoicesSubject.asObservable();
    this.invoicesCountsSubject = new BehaviorSubject<InvoicesCounts>({
      all: 0,
      paid: 0,
      notPaid: 0
    });
    this.invoicesCounts$ = this.invoicesCountsSubject.asObservable();
  }

  getAll() {
    this.invoicesAll = this.generateInvoices(300);
    this.filter('');
  }

  filter(filter: string) {
    this.filteredText = filter;
    if (filter) {
      filter = filter.toLowerCase();
      this.invoicesFiltered = this.invoicesAll.filter((i) => {
        return i.name.toLowerCase().indexOf(filter) >= 0;
      });
    } else {
      this.invoicesFiltered = [...this.invoicesAll];
    }
    const paidCount = this.calculatePaidInvoicesCount();
    const count = {
      all: this.invoicesFiltered.length,
      paid: paidCount,
      notPaid: this.invoicesFiltered.length - paidCount
    };

    this.invoicesSubject.next(this.invoicesFiltered);
    this.invoicesCountsSubject.next(count);
  }

  addInvoice(name: string) {
    const newInvoice = {
      id: this.getNewId(),
      name,
      price: this.generatePrice()
    } as Invoice;

    console.log(newInvoice);

    this.invoicesAll.splice(0, 0, newInvoice);
    this.filter(this.filteredText);
  }

  private generateInvoices(numberOfInvoices: number): Invoice[] {
    const result: Invoice[] = [];

    for (let i = 0; i < numberOfInvoices; i++) {
      result.push({
        id: i,
        name: this.generateName(10),
        price: this.generatePrice()
      });
    }

    return result;
  }

  private generateName(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private generatePrice(): number {
    return Math.random();
  }

  private calculatePaidInvoicesCount(): number {
    if (this.invoicesFiltered.length === 0) {
      return 0;
    }

    return this.invoicesFiltered.reduce((count, currentInvoice) => {
        return count + (currentInvoice.price >= 0.5 ? 1 : 0);
      }, 0);
  }

  private getNewId(): number {
    return Math.max(...this.invoicesAll.map(i => i.id)) + 1;
  }

}
