import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingItems } from './purchasing-items';

describe('PurchasingItems', () => {
  let component: PurchasingItems;
  let fixture: ComponentFixture<PurchasingItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
