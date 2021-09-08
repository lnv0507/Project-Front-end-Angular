import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss'],
})
export class CartHeaderComponent {
  closeResult = '';
  items = this.cart.getCartItems();
  checkCart = false;
  close = "close-cart";
  constructor(private modalService: NgbModal,
    private cart: CartService,) { }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'clicking backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getTotal() {
    return this.cart.getTotal();
  }

  // dong the cart
  closeCart() {
    return this.checkCart = true;
  }
}
