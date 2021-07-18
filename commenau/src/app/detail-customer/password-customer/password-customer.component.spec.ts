import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCustomerComponent } from './password-customer.component';

describe('PasswordCustomerComponent', () => {
  let component: PasswordCustomerComponent;
  let fixture: ComponentFixture<PasswordCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
