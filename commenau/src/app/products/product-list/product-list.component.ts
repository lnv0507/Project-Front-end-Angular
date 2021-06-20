import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  dataProduct2: Array<Product> = [];
  dataPro: any;
  totalRecords!:String;
  p: number = 1;
  constructor(private serviceProduct: ProductsService, public router: Router) {}

  ngOnInit(): void {
    this.serviceProduct.getProduct().subscribe((data) => {
      console.log('data', data);
      this.dataPro = data;
    });
  }
}
