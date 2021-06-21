import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  items = this.cart.getCartItems();

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }
  increaseQuatity(id:any){
    for(let p of this.items){
      if(p.id === id){
        p.quatity++;
      }
    }
  }

  reduceQuatity(id: any){
    for(let p of this.items){
      if(p.id === id){
        if(p.quatity ===1)
          p.quatity =1;
        else p.quatity--;
      }
    }
  }
  
  removeItem(id : any){
     const index = this.items.findIndex(item => item.id === id);
     this.items.splice(index,1);
  }

}
