import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductDayComponent } from 'src/app/myhome/product-day/product-day.component';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  totalRecords!: String;
  p: number = 1;
  search = '';
  dataProduct: Array<Product> = [];
  weekDays = [{ day: 'string' }];
  productCheck = true;

  constructor(
    private product: ProductsService,
    public router: Router,
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

  order: string = 'id';
  reverse: boolean = false;
  public setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  public addToCart(product: Product) {
    this.cartService.addItem(product);
  }
}
