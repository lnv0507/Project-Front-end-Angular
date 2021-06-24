import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  getTotal() {
    return this.cartService.getTotal();
  }
}
