import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../Services/cart.service';
import { ProductCart } from '../model/product-cart';
import { UserService } from '../Services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { CartHeaderComponent } from 'src/app/header-vip/cart-header/cart-header.component';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
})
export class ShopDetailComponent implements OnInit, OnChanges {
  name = 'ngx sharebuttons';
  heartIcon = false;
  product: any;
  change = false;
  value = 1;
  test: any;
  toDay!: String;
  constructor(
    private serviceProduct: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private userService: UserService,
    private clickCart: NgbModal,
  
  ) {
    this.toDay = serviceProduct.getDay();
    console.log(this.toDay);

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    this.getProdutById(productIdFromRoute);
    this.connect();
  }
  ngOnChanges(): void {
    this.getProduct();
  }
  public connect() {
    this.serviceProduct.connectProduct();



  }
  getProdutById(id: any) {
    this.serviceProduct.getProductById(id).subscribe((res) => {
      this.product = res;
      let parse = JSON.parse(localStorage.getItem(this.product.id + '') || '{}')
      if (JSON.stringify(parse) == 'true')
        this.product.favorite = true;
      else
        this.product.favorite = false;
    });

  }

  fullHeart() {
    if (this.heartIcon) {
      this.heartIcon = false;
    } else {
      this.heartIcon = true;
    }
  }
  public getProduct() {
    return this.serviceProduct.getDayProduct();
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
  public addToCartDetail() {
    if (this.cartService.checkHour()) {
    const item: ProductCart = new ProductCart();
    item.id = this.product.id;
    item.img = this.product.img;
    item.name = this.product.name;
    item.price = this.product.price;
    item.quantity = this.value;
    this.cartService.addItem(item);
    }
    else{
      this.clickCart.open(DialogComponent);
    }
  }
  reduceValue() {
    if (this.value === 1) {
      this.value = 1;
    } else {
      this.value--;
    }
  }
  increaseValue() {
    this.value++;
  }
  refresh(productId: any) {
    return this.getProdutById(productId);
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
}
