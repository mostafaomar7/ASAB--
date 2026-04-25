import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchItems } from './branch-items';

describe('BranchItems', () => {
  let component: BranchItems;
  let fixture: ComponentFixture<BranchItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
