import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductCart } from 'src/app/model/product-cart';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.scss']
})
export class WishlistDetailComponent implements OnInit {
  listWish = this.userService.getWishList();

  constructor(private userService: UserService, private cartService: CartService,) { }

  ngOnInit(): void {
    this.userService.getUserData();
    console.log(this.listWish);
  }


  public addToCart(product: Product) {
    const item : ProductCart = new ProductCart();
    item.id = product.id;
    item.img = product.img;
    item.name = product.name;
    item.price = product.price;
    item.quantity = 1;
    this.cartService.addItem(item);

  }

  public removeItem(p: Product){
    const index = this.userService.wishlist.findIndex((item) => item.id == p.id);
    this.userService.user.listWishList.splice(index, 1);
    this.userService.updateUser(this.userService.user).subscribe();
  }

}
