
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../Services/user.service';




@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {
  user!: User;
  urlImg!: string;
  displayAlert = false;
  isAccount = true;
  isPassword = false;
  isOrder = false;
  isWishList = false;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  displayAccount() {
    if (!this.isAccount) {
      this.isAccount = true;
      this.isPassword = false;
      this.isOrder = false;
      this.isWishList = false;
    }
  }
  displayPassword() {
    if (!this.isPassword) {
      this.isPassword = true;
      this.isAccount = false;
      this.isOrder = false;
      this.isWishList = false;
    }
  }
  displayOrder() {
    if (!this.isOrder) {
      this.isOrder = true;
      this.isWishList = false;
      this.isAccount = false;
      this.isPassword = false;
    }
  }
  displayWhislist(){
    if(!this.isWishList){
      this.isWishList = true;
      this.isOrder = false;
      this.isAccount = false;
      this.isPassword = false;
    }
  }


}
