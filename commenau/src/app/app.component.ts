import { Route } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './model/product';
import { ProductsService } from './Services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'commenau';
  menu_header: string = 'menu-header';
  menu_header2: string = 'menu-header2';
  constructor(public router: Router, private product: ProductsService) {}
  public hideCart() {
    this.product.addCart = false;
    return this.product.addCart;
  }
}
