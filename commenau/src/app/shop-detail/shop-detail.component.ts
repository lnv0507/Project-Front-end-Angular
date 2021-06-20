import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
})
export class ShopDetailComponent implements OnInit {
  heartIcon = false;
  product:any
  
  constructor(private serviceProduct: ProductsService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.getProdutById(productIdFromRoute);
  }
  getProdutById(id: any){
    this.serviceProduct.getProductById(id).subscribe((res) =>{
      this.product = res;
    })
  }
  
  fullHeart() {
    if (this.heartIcon) {
      this.heartIcon = false;
    } else {
      this.heartIcon = true;
     
    }
  }
}
