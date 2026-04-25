import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEmployees } from './branch-employees';

describe('BranchEmployees', () => {
  let component: BranchEmployees;
  let fixture: ComponentFixture<BranchEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
