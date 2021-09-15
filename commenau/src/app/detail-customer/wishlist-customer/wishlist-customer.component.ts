import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { CartHeaderComponent } from 'src/app/header-vip/cart-header/cart-header.component';
import { Product } from 'src/app/model/product';
import { ProductCart } from 'src/app/model/product-cart';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-wishlist-customer',
  templateUrl: './wishlist-customer.component.html',
  styleUrls: ['./wishlist-customer.component.scss']
})
export class WishlistCustomerComponent implements OnInit {

  listWish = this.userService.getWishList();

  constructor(private product: ProductsService,private userService: UserService, private cartService: CartService,private clickCart: NgbModal,) { }

  ngOnInit(): void {
    this.userService.getUserData();
    console.log(this.listWish);
  }


  public addToCart(product: Product) {
    if (this.cartService.checkHour()) {
      this.clickCart.open(CartHeaderComponent);
    const item: ProductCart = new ProductCart();
    item.id = product.id;
    item.img = product.img;
    item.name = product.name;
    item.price = product.price;
    item.quantity = 1;
    this.cartService.addItem(item);
    }
    else{
      this.clickCart.open(DialogComponent);
    }

  }

  public removeItem(p: Product) {
    return this.userService.removeWish(p);
  }
  public getCheckDay(day: String) {
    if (day == this.product.getDay())
      return true;
    return false;
  }

}
