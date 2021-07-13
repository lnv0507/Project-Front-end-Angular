import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Wishlist } from '../model/wishlist';
import { ProductsService } from './products.service';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistItems: Array<Wishlist> = [];
  lastId: number = 0;
  dataProduct!: any;
  private products!: ProductsService;
  constructor(private http: HttpClient) {

  }
  addItem(product: Product) {
    const exist = this.wishlistItems.find((item: Wishlist) => {
      return item.id === product.id;

    });
    if (exist) {
      exist.quatity == false;
    } else {
      const item: Wishlist = new Wishlist();
      item.id = product.id;
      item.name = product.name;
      item.price = product.price;
      item.quatity = true;
      item.img = product.img;
      item.yeuthich = product.yeuthich;
      this.wishlistItems.push(item);

      // cách của Lâm

      //   if (!product.id) {
      //     product.id = ++this.lastId;

      //   }
      //   this.wishlistItems.push(product);
    }
  }
  removeItem(p: Product) {
    const index = this.wishlistItems.findIndex((item) => item.id === p.id);
    this.wishlistItems.splice(index, 1);
    this.setWishlistItems(this.wishlistItems);
  }
  getWishlistItems() {
    if (this.wishlistItems.length == 0) {
      // this.products.getDataProduct().forEach(element => {
      //   element.yeuthich = false;
      // });

    }
    return this.wishlistItems;
  }


  setWishlistItems(value: Array<Wishlist>) {
    this.wishlistItems = value;
  }
  public addToWishlist(p: Product) {
    localStorage.setItem(p.id + '', 'true');
    p.yeuthich = true;
    this.addItem(p);

  }

  public removeWish(p: Product) {
    localStorage.setItem(p.id + '', 'false');
    p.yeuthich = false;
    this.removeItem(p);
  }



}
