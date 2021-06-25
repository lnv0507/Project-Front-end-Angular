import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { VoucherService } from 'src/app/Services/voucher.service';
import { Voucher } from 'src/app/model/voucher';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  nameVoucher = "";
  checkVoucher = false;
  message : String = "hello";
  voucher: Voucher = new Voucher();

  constructor(private cartService: CartService, private voucherService: VoucherService) {}

  ngOnInit(): void {}
  getTotalAll() {
    var total = this.cartService.getTotal();
    return total - this.getDiscount();
  }
  getTotal(){
    return this.cartService.getTotal();
  }

  getDiscount(){
    var total = this.cartService.getTotal();
    if(this.checkVoucher && (total >= this.voucher.condition)){
      return total*this.voucher.percent + this.voucher.discount
    }
    return 0;
  }
  applyVoucher(){
  const listVoucher: Array<Voucher> = this.voucherService.getVoucherData();
    for(let v of listVoucher){
      if(v.id === this.nameVoucher){
        this.voucher = v;
        this.checkVoucher = true;
      }
    }
   
  }
  
   

  
}
