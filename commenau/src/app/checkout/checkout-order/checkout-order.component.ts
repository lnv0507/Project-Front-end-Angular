import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { VoucherService } from 'src/app/Services/voucher.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.scss']
})
export class CheckoutOrderComponent implements OnInit {
  items :any;
  
  constructor(private cartService: CartService, private voucherService: VoucherService) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  
  getDisCount(){
    return this.voucherService.getDiscount();
  }
  getAllTotal(){
    return this.cartService.getTotal() - this.getDisCount();
  }


}
