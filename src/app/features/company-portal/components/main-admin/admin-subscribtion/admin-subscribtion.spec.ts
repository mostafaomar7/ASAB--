import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscribtion } from './admin-subscribtion';

describe('AdminSubscribtion', () => {
  let component: AdminSubscribtion;
  let fixture: ComponentFixture<AdminSubscribtion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSubscribtion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubscribtion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
