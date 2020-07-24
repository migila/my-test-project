import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvpocesApiService } from '../../services/invpoces-api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-invoices-search',
  templateUrl: './invoices-search.component.html',
  styleUrls: ['./invoices-search.component.scss']
})
export class InvoicesSearchComponent implements OnInit, OnDestroy {

  searchForm: FormGroup;

  private subs = new SubSink();

  constructor(
    private fb: FormBuilder,
    private invoicesService: InvpocesApiService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.subscribeToSearch();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private createForm() {
    this.searchForm = this.fb.group({
      searchText: ['']
    });
  }

  private subscribeToSearch() {
    this.subs.sink = this.searchForm.get('searchText').valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe(filter => this.invoicesService.filter(filter));
  }

}
