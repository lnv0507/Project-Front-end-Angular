import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  dataPro: any;
  constructor(private serviceProduct: ProductsService) {}


  ngOnInit(): void {
    this.serviceProduct.getProduct().subscribe((data) => {
      console.log('data', data);
      this.dataPro = data;
    });
  }

}
