import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSalesreport } from './supplier-salesreport';

describe('SupplierSalesreport', () => {
  let component: SupplierSalesreport;
  let fixture: ComponentFixture<SupplierSalesreport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierSalesreport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierSalesreport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
