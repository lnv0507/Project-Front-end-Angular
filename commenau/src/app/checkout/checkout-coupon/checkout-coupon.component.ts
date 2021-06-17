import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-coupon',
  templateUrl: './checkout-coupon.component.html',
  styleUrls: ['./checkout-coupon.component.scss']
})
export class CheckoutCouponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showCoupon = false;

}
