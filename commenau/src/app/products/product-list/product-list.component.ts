import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductDayComponent } from 'src/app/myhome/product-day/product-day.component';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductCart } from 'src/app/model/product-cart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartHeaderComponent } from 'src/app/header-vip/cart-header/cart-header.component';
import { UserService } from 'src/app/Services/user.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  totalRecords!: String;
  p: number = 1;
  search = '';
  dataProduct!: Array<Product>;
  dataProduct2 = this.product.dataProduct;
  weekDays = [{ day: 'string' }];
  productCheck = true;
  order: string = 'id';
  reverse: boolean = false;
  check!: boolean;
  days = this.product.getDay();
  active = "active active2";
  noActive = "noActive";
  checkCart!: boolean;
  public day: Date = new Date();

  constructor(
    private userService: UserService,
    private product: ProductsService,
    public router: Router,
    private cartService: CartService,
    private clickCart: NgbModal,

  ) {
    this.weekDays = this.product.weekDays;
  }

  ngOnInit(): void {
    // load connect
    this.connect();
    this.userService.getUserData();
    // this.getWishList();

  }
  // connect product
  public connect() {
    this.product.connectProduct();
  }
  // hoat dong click product theo ngay
  public listProductDay(day: String): Product[] {
    this.dataProduct = this.product.productDay(day);
    this.productCheck = false;
    return this.dataProduct;
  }
  // haot dong lay product dung ngay hien tai

  public checkProductInWishList(id: number) {
    return this.userService.checkProductInWishList(id);
  }
  public getProduct() {
    this.productCheck = true;
    return this.product.getDayProduct();
  }

  public setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
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

}
