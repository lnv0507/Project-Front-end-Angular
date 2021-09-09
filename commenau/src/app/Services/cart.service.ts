import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { ProductCart } from '../model/product-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getQuantity() {
    let total = 0;
    for (let i of this.cartItems) {
      total +=i.quantity;
    }
    return total;
  }
  cartItems: Array<ProductCart> = [];
  orderInfo! : Order;
  constructor() {}
  addItem(product: ProductCart) {
    const exist = this.cartItems.find((item: ProductCart) => {
      return item.id === product.id;
    });

    if (exist) {
      exist.quantity += product.quantity;
    } else {
      this.cartItems.push(product);
    }
  }

  getCartItems() {
    return this.cartItems;
  }
  setCartItems(cartItems: Array<ProductCart>) {
    this.cartItems = cartItems;
  }
  getTotal() {
    let total = 0;
    for (let i of this.cartItems) {
      total += i.price * i.quantity;
    }
    return total;
  }



}
