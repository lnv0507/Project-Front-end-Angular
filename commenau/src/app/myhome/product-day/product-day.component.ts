import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-day',
  templateUrl: './product-day.component.html',
  styleUrls: ['./product-day.component.scss'],
})
export class ProductDayComponent implements OnInit {
  dataProduct!: Product[];
  dataProduct2: Array<Product> = [];
  weekDays = [
    { day: 'Thứ 2' },
    { day: 'Thứ 3' },
    { day: 'Thứ 4' },
    { day: 'Thứ 5' },
    { day: 'Thứ 6' },
    { day: 'Thứ 7' },
  ];
  titleRice = 'Cơm Trưa Văn Phòng';
  constructor(private serviceProduct: ProductsService) {}

  public ngOnInit(): void {
    this.connectProduct();
  }
  public connectProduct(): void {
    this.serviceProduct.getProduct().subscribe((data) => {
      // console.log('data', data);
      this.dataProduct = data;
      this.productDay('Thứ 2');
    });
  }
  // List product follow day of weeks
  public productDay(day: String) {
    this.dataProduct2 = [];
    for (let i of this.dataProduct) {
      if (day === i.weekdays) {
        this.dataProduct2.push(i);
      }
    }
  }
  // create random weekday
   // public getWeekDay() {
  //   for (let i in this.weekDays) {
  //   }
  // }
}
