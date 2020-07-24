export interface Invoice {
  id: number;
  name: string;
  price: number;
}

export interface InvoicesCounts {
  all: number;
  paid: number;
  notPaid: number;
}
