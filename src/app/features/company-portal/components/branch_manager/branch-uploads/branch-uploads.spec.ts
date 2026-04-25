import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchUploads } from './branch-uploads';

describe('BranchUploads', () => {
  let component: BranchUploads;
  let fixture: ComponentFixture<BranchUploads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchUploads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchUploads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
