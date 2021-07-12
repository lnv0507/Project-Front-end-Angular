import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { VoucherService } from '../Services/voucher.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  items :any;
  public day: Date = new Date();
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
