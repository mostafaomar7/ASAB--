import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierKpi } from './supplier-kpi';

describe('SupplierKpi', () => {
  let component: SupplierKpi;
  let fixture: ComponentFixture<SupplierKpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierKpi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierKpi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
