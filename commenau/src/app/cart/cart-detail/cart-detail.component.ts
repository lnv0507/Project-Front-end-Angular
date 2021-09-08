import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {
  items = this.cart.getCartItems();

  constructor(private cart: CartService) {}

  ngOnInit(): void {}
  // increase in number items cart
  increaseQuantity(id: any) {
    // loop items of list
    for (let p of this.items) {
      if (p.id === id)  // can take out id === id if true => quantity++
        p.quantity++;
    }
    this.cart.setCartItems(this.items);
  }

  checkTotal(){
    var total = new Number(this.cart.getTotal());
    return (total > 0) ? true : false;
  }
// reduce in number items cart
  reduceQuantity(id: any) {
    for (let p of this.items) {
      if (p.id === id) {
        if (p.quantity === 1) p.quantity = 1;
        else p.quantity--;
      }
    }
    this.cart.setCartItems(this.items);
  }

  removeItem(id: any) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
    this.cart.setCartItems(this.items);
  }
}
