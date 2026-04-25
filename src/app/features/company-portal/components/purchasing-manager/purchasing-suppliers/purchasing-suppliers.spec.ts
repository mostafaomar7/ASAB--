import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingSuppliers } from './purchasing-suppliers';

describe('PurchasingSuppliers', () => {
  let component: PurchasingSuppliers;
  let fixture: ComponentFixture<PurchasingSuppliers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingSuppliers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingSuppliers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
