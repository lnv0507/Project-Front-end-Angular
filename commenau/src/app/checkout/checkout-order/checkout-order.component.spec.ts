import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOrderComponent } from './checkout-order.component';

describe('CheckoutOrderComponent', () => {
  let component: CheckoutOrderComponent;
  let fixture: ComponentFixture<CheckoutOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
