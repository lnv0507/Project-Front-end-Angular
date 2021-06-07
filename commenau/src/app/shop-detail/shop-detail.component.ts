import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
})
export class ShopDetailComponent implements OnInit {
  heartIcon = false;
  constructor() {}

  ngOnInit(): void {}
  fullHeart() {
    if (this.heartIcon) {
      this.heartIcon = false;
    } else {
      this.heartIcon = true;
     
    }
  }
}
