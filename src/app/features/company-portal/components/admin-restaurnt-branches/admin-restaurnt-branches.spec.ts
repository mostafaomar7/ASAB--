import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestaurntBranches } from './admin-restaurnt-branches';

describe('AdminRestaurntBranches', () => {
  let component: AdminRestaurntBranches;
  let fixture: ComponentFixture<AdminRestaurntBranches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRestaurntBranches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRestaurntBranches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
