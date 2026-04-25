import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingNeworder } from './purchasing-neworder';

describe('PurchasingNeworder', () => {
  let component: PurchasingNeworder;
  let fixture: ComponentFixture<PurchasingNeworder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingNeworder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingNeworder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
