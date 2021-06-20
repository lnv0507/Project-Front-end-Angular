import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/Services/cart.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [];

  constructor(private cart : CartService) { }

  ngOnInit(): void {
  }



}
