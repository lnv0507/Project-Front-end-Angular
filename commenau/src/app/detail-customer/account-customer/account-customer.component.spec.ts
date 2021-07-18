import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCustomerComponent } from './account-customer.component';

describe('AccountCustomerComponent', () => {
  let component: AccountCustomerComponent;
  let fixture: ComponentFixture<AccountCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
