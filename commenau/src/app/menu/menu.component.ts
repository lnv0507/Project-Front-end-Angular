import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  productName!: number;
  
  constructor(
    private serviceDoan: ProductsService
    ) {
    this.productName = serviceDoan.id;
  }

  ngOnInit(): void {
    this.serviceDoan.getProduct().subscribe((data) => {
      console.log(data);
    });
  }
}
