import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingSendsupplier } from './purchasing-sendsupplier';

describe('PurchasingSendsupplier', () => {
  let component: PurchasingSendsupplier;
  let fixture: ComponentFixture<PurchasingSendsupplier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingSendsupplier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingSendsupplier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
