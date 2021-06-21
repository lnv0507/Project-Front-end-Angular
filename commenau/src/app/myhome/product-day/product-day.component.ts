import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';

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
  constructor(private product: ProductsService) {
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
  // create random weekday
  // public getWeekDay() {
  //   for (let i in this.weekDays) {
  //   }
  // }
}
