
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductCart } from '../model/product-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  exist :boolean | undefined;
  cartItems:ProductCart [] = [];

  constructor() {}
  
  addItem(product: Product){
    const exist = this.cartItems.find((item: ProductCart) =>{
      return item.id === product.id;
    });

    if(exist)
      exist.quatity++;
    else{
      this.cartItems.push(new ProductCart(product.id,product.name,product.price, product.img));
    }
     console.log(this.cartItems);

  }
  
  getCartItems(){
    return this.cartItems;
  }

}

  






