import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesCountsComponent } from './invoices-counts.component';

describe('InvoicesCountsComponent', () => {
  let component: InvoicesCountsComponent;
  let fixture: ComponentFixture<InvoicesCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
