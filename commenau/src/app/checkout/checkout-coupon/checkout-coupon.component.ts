import { Component, OnInit } from '@angular/core';
import { VoucherService } from 'src/app/Services/voucher.service';

@Component({
  selector: 'app-checkout-coupon',
  templateUrl: './checkout-coupon.component.html',
  styleUrls: ['./checkout-coupon.component.scss']
})
export class CheckoutCouponComponent implements OnInit {

  constructor(private voucherService: VoucherService) { }

  ngOnInit(): void {
  }
  showCoupon = false;
  nameVoucher = "";
  applyVoucher(nameVoucher: any){
    this.voucherService.applyVoucher(nameVoucher);

  }
  getMessage(){
    return this.voucherService.getMessage();
  }
  getCheckMessage(){
    return this.voucherService.getCheckMessage();
  }

}
