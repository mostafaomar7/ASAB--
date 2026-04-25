import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierItemsPrices } from './supplier-items-prices';

describe('SupplierItemsPrices', () => {
  let component: SupplierItemsPrices;
  let fixture: ComponentFixture<SupplierItemsPrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierItemsPrices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierItemsPrices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
