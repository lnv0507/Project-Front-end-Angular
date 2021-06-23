import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductCart } from '../model/product-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Array<ProductCart> = [];
  constructor() {}
  addItem(product: Product) {
    const exist = this.cartItems.find((item: ProductCart) => {
      return item.id === product.id;
    });

    if (exist) {
      exist.quatity++;
    } else {
      const item: ProductCart = new ProductCart();
      item.id = product.id;
      item.name = product.name;
      item.price = product.price;
      item.quatity = 1;
      item.img = product.img;
      this.cartItems.push(item);
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
