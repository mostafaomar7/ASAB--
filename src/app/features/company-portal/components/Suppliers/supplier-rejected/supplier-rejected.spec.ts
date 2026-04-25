import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRejected } from './supplier-rejected';

describe('SupplierRejected', () => {
  let component: SupplierRejected;
  let fixture: ComponentFixture<SupplierRejected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierRejected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierRejected);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
