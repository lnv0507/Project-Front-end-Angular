import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  allProduct = [];

  constructor(private serviceProduct: ProductsService) {}

  ngOnInit(): void {
    this.serviceProduct.getProduct().subscribe((response) => {
     console.log(response);
    });
  }
}
