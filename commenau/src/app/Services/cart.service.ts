import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductCart } from '../model/product-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getQuatity() {
    let total = 0;
    for (let i of this.cartItems) {
      total +=i.quatity;
    }
    return total;
  }
  cartItems: Array<ProductCart> = [];
  constructor() {}
  addItem(product: ProductCart) {
    const exist = this.cartItems.find((item: ProductCart) => {
      return item.id === product.id;
    });

    if (exist) {
      exist.quatity += product.quatity;
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
      total += i.price * i.quatity;
    }
    return total;
  }

}
