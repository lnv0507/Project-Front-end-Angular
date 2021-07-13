import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';
import { HeaderVipComponent } from 'src/app/header-vip/header-vip.component';
import { ProductCart } from 'src/app/model/product-cart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartHeaderComponent } from 'src/app/header-vip/cart-header/cart-header.component';
import { WishlistService } from 'src/app/Services/wishlist.service';

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
  constructor(
    private product: ProductsService,
    private cartService: CartService,
    private clickCart: NgbModal,
    private wishlistService: WishlistService
  ) {
    this.weekDays = this.product.weekDays;
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
    this.clickCart.open(CartHeaderComponent);
    const item: ProductCart = new ProductCart();
    item.id = product.id;
    item.img = product.img;
    item.name = product.name;
    item.price = product.price;
    item.quatity = 1;
    this.cartService.addItem(item);
  }
  public addToWishlist(p: Product) {
    // this.getProduct().forEach(element => {
    //     element.id == p.id ? element.yeuthich = true : ''
    // });
    // localStorage.setItem(p.id + '', 'true');
    return this.wishlistService.addToWishlist(p);
  }

  public removeWish(p: Product) {
    // localStorage.setItem(p.id + '', 'false');
    return this.wishlistService.removeWish(p);
  }
  getWishList() {
    return this.wishlistService.getWishlistItems();
  }
}
