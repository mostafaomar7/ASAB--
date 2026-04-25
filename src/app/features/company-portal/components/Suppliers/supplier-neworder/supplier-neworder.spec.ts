import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierNeworder } from './supplier-neworder';

describe('SupplierNeworder', () => {
  let component: SupplierNeworder;
  let fixture: ComponentFixture<SupplierNeworder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierNeworder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierNeworder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
