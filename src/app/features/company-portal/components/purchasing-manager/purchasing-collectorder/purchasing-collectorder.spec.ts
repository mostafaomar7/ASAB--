import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingCollectorder } from './purchasing-collectorder';

describe('PurchasingCollectorder', () => {
  let component: PurchasingCollectorder;
  let fixture: ComponentFixture<PurchasingCollectorder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingCollectorder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingCollectorder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
