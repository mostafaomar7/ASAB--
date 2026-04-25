import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingKpis } from './purchasing-kpis';

describe('PurchasingKpis', () => {
  let component: PurchasingKpis;
  let fixture: ComponentFixture<PurchasingKpis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingKpis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingKpis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
