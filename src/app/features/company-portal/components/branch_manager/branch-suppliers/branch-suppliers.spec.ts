import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSuppliers } from './branch-suppliers';

describe('BranchSuppliers', () => {
  let component: BranchSuppliers;
  let fixture: ComponentFixture<BranchSuppliers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchSuppliers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchSuppliers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
