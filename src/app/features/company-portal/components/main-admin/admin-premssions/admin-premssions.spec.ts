import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPremssions } from './admin-premssions';

describe('AdminPremssions', () => {
  let component: AdminPremssions;
  let fixture: ComponentFixture<AdminPremssions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPremssions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPremssions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
