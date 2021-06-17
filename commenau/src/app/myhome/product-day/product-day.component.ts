import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-day',
  templateUrl: './product-day.component.html',
  styleUrls: ['./product-day.component.scss'],
})
export class ProductDayComponent implements OnInit {
  dataPro: any;
  constructor(private serviceProduct: ProductsService) {}

  public ngOnInit(): void {
    this.serviceProduct.getProduct().subscribe((data) => {
      console.log('data', data);
      this.dataPro = data;
    });
  }
}
