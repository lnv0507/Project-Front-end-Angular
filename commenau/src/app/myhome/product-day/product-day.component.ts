import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';
import { HeaderVipComponent } from 'src/app/header-vip/header-vip.component';
import { ProductCart } from 'src/app/model/product-cart';

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
  constructor(
    private product: ProductsService,
    private cartService: CartService
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
    const item : ProductCart = new ProductCart();
    item.id = product.id;
    item.img = product.img;
    item.name = product.name;
    item.price = product.price;
    item.quatity = 1;
    this.cartService.addItem(item);
  }
}
