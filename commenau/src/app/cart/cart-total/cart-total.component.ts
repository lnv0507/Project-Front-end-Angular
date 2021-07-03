import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { VoucherService } from 'src/app/Services/voucher.service';
import { Voucher } from 'src/app/model/voucher';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  nameVoucher = "";

  constructor(private cartService: CartService, private voucherService: VoucherService) {
    
  }
  ngOnInit(): void {}
  
  getTotalAll() {
    return this.getTotal() - this.getDiscount();
  }
  getTotal(){
    return this.cartService.getTotal();
  }

  getDiscount(){
    return this.voucherService.getDiscount();
  }
  applyVoucher(nameVoucher: any){
    this.voucherService.applyVoucher(nameVoucher);

  }
  getMessage(){
    return this.voucherService.getMessage();
  }
  getCheckMessage(){
    console.log(this.voucherService.getCheckMessage());
    
    return this.voucherService.getCheckMessage();
  }

}
