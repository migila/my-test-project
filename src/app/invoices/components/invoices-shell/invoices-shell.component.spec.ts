import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesShellComponent } from './invoices-shell.component';

describe('InvoicesShellComponent', () => {
  let component: InvoicesShellComponent;
  let fixture: ComponentFixture<InvoicesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
