import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './Services/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderVipComponent } from './header-vip/header-vip.component';
import { CartHeaderComponent } from './header-vip/cart-header/cart-header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'commenau';
  menu_header: string = 'menu-header';
  menu_header2: string = 'menu-header2';

  constructor(public router: Router, private modalService: NgbModal) {}

}
