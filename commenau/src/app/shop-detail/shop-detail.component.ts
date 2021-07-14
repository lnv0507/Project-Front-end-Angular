import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../Services/cart.service';
import { ProductCart } from '../model/product-cart';
import { WishlistService } from '../Services/wishlist.service';

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
  constructor(
    private serviceProduct: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private wishlistService: WishlistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
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
        this.product.yeuthich = true;
      else
        this.product.yeuthich = false;
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
    const item: ProductCart = new ProductCart();
    item.id = product.id;
    item.img = product.img;
    item.name = product.name;
    item.price = product.price;
    item.quatity = 1;
    this.cartService.addItem(item);
  }
  public addToCartDetail() {
    const item: ProductCart = new ProductCart();
    item.id = this.product.id;
    item.img = this.product.img;
    item.name = this.product.name;
    item.price = this.product.price;
    item.quatity = this.value;
    this.cartService.addItem(item);
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
    return this.wishlistService.addToWishlist(p);
  }

  public removeWish(p: Product) {
    return this.wishlistService.removeWish(p);
  }
  getWishList() {
    return this.wishlistService.getWishlistItems();
  }
}
