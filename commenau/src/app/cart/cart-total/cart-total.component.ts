import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  _total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getTotal();
  }
  getTotal() {
    this._total = this.cartService.getTotal();
  }
  set total(total: number) {
    this._total = total;
  }
  get total() {
    return this._total;
  }
}
