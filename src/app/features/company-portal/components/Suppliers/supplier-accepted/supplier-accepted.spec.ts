import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAccepted } from './supplier-accepted';

describe('SupplierAccepted', () => {
  let component: SupplierAccepted;
  let fixture: ComponentFixture<SupplierAccepted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierAccepted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierAccepted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
