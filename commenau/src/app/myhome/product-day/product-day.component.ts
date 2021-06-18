import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-day',
  templateUrl: './product-day.component.html',
  styleUrls: ['./product-day.component.scss'],
})
export class ProductDayComponent implements OnInit {
  dataProduct!: Product[];
  product = new Product();
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
      console.log('data', data);
      this.dataProduct = data;
    });
  }
  public getWeekDay() {
    for (let i in this.weekDays) {
    }
  }
  // public productDay(day: String) {
  //   if (day == this.product.weekdays) {
  //     return this.dataProduct;
  //   }
  // }
}
