import { Component, OnInit, HostListener, Input } from '@angular/core';
import { totalmem } from 'os';
import { CartService } from '../Services/cart.service';
import { ProductsService } from '../Services/products.service';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-header-vip',
  templateUrl: './header-vip.component.html',
  styleUrls: ['./header-vip.component.scss'],
})
export class HeaderVipComponent implements OnInit {
  header_variable = false;
  search_click = false;
  @Input() menu_header: string = 'menu-header2';
  items = this.cart.getCartItems();
  itemsWishlist = this.wish.getWishlistItems();
  styleAddCart = {
    opacity: '1',
    visibility: 'inherit',
    width: '35em',
    height: '50em',
  };
  styleCloseCart = {
    transition: 'height 0.5s ease-in !important',
    visibility: 'hidden !important',
    opacity: '0',
    position: 'absolute !important',
    backgroundColor: '#fffff !important',
    width: '0em !important',
    height: '0em !important',
    left: '-50px !important',
    zIndex: '2 !important',
    overflow: 'hidden !important',
  };
  thanhBar = {
    position: 'relative',
    borderTop: '5px solid transparent',
    borderTight: '5px solid transparent',
    borderBbottom: '5px solid #fffff',
    borderLeft: '5px solid transparent',
    width: '0',
    height: '0',
    margin: 'auto',
    marginTop: '5px',
  };

  constructor(
    private cart: CartService,
    private product: ProductsService,
    private wish: WishlistService
  ) {}

  ngOnInit(): void {
    this.getTotal();
  }

  @HostListener('document:scroll')
  scroolFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
  searchClick() {
    if (this.search_click) {
      this.search_click = false;
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        this.header_variable = true;
      } else {
        this.header_variable = false;
      }
    } else {
      this.search_click = true;
      this.header_variable = true;
    }
    // if (this.search_click) {
    //   document.body.style.backgroundColor = 'gray';
    //   document.body.style.zIndex = '99999999';
    //   document.body.style.position = 'absolute';
    // } else {
    //   document.body.style.backgroundColor = 'red';
    // }

    // Note : Làm mờ khi click search mà chưa ra :))
  }

  getTotal() {
    return this.cart.getTotal();
  }

}
