import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesAddComponent } from './invoices-add.component';

describe('InvoicesAddComponent', () => {
  let component: InvoicesAddComponent;
  let fixture: ComponentFixture<InvoicesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
