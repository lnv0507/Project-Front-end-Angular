import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';
import { HeaderVipComponent } from 'src/app/header-vip/header-vip.component';
import { ProductCart } from 'src/app/model/product-cart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartHeaderComponent } from 'src/app/header-vip/cart-header/cart-header.component';
import { UserService } from 'src/app/Services/user.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-product-day',
  templateUrl: './product-day.component.html',
  styleUrls: ['./product-day.component.scss'],
})
export class ProductDayComponent implements OnInit {
  dataProduct: Array<Product> = [];
  weekDays = [{ day: 'string' }];
  titleRice = 'Cơm Trưa Văn Phòng';
  date!: Date;
  productCheck = true;
  days = this.product.getDay();
  active = "active active2";
  noActive = "noActive";
  toDay!: String;

  constructor(
    private product: ProductsService,
    private cartService: CartService,
    private clickCart: NgbModal,
    private userService: UserService
  ) {
    this.weekDays = this.product.weekDays;
    this.toDay = this.product.getDay();
  }

  ngOnInit(): void {
    this.connect();

  }
  public connect() {
    this.product.connectProduct();
  }
  public listProductDay(day: String): Product[] {
    this.dataProduct = this.product.productDay(day);
    this.productCheck = false;
    return this.dataProduct;
  }
  public getProduct() {
    this.productCheck = true;
    return this.product.getDayProduct();
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
    }else{
      this.clickCart.open(DialogComponent);
    }
  }
  public addToWishlist(p: Product) {
    return this.userService.addToWishlist(p);
  }

  public removeWish(p: Product) {
    return this.userService.removeWish(p);
  }
  public checkProductInWishList(id: number) {
    return this.userService.checkProductInWishList(id);
  }
  public getCheckDay(day: String) {
    if (day == this.product.getDay())
      return true;
    return false;
  }
}
