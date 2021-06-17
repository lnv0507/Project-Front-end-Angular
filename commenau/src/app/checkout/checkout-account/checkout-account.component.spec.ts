import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAccountComponent } from './checkout-account.component';

describe('CheckoutAccountComponent', () => {
  let component: CheckoutAccountComponent;
  let fixture: ComponentFixture<CheckoutAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
