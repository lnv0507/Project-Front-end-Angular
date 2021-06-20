import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductDayComponent } from 'src/app/myhome/product-day/product-day.component';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  totalRecords!: String;
  p: number = 1;
  search='';
  dataProduct: Array<Product> = [];
  weekDays = [{ day: 'string' }];

  constructor(private product: ProductsService, public router: Router) {
    this.weekDays = this.product.weekDays;
  }

  ngOnInit(): void {
    this.connect();
  }
  public connect() {
    this.product.connectProduct();
    this.dataProduct = this.product.productDay('Thứ 2');
  }
  public listProductDay(day: String): Product[] {
    this.dataProduct = this.product.productDay(day);
    return this.dataProduct;
  }
}
