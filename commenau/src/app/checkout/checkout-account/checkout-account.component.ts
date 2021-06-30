import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-account',
  templateUrl: './checkout-account.component.html',
  styleUrls: ['./checkout-account.component.scss']
})
export class CheckoutAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showAccount = false;

  displayAccount(){
    this.showAccount = !this.showAccount;
  }

}
