import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Wishlist } from '../model/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistItems: Array<Wishlist>=[];


  constructor() { }
  addItem(product: Product){
    const exist=this.wishlistItems.find((item: Wishlist)=>{
      return item.id===product.id;

    });
    if(exist){
      exist.quatity++
    }else{
      const item:Wishlist =new Wishlist();
      item.id=product.id;
      item.name=product.name;
      item.price=product.price;
      item.quatity =1;
      item.img=product.img;
      this.wishlistItems.push(item);
    }
  }

  getWishlistItems(){
    return this.wishlistItems;
  }

  setWishlistItems(value: Array<Wishlist>) {
    this.wishlistItems = value;
  }
}
