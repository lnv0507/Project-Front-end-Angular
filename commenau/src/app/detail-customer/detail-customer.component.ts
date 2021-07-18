
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
  isPassword= false;

  constructor(private userService: UserService) {
    
   }

  ngOnInit(): void {
    this.user=this.userService.user;
  }
  
  displayAccount(){
    if(this.isAccount){
      return;
    }
    else{
      this.isAccount = true;
      this.isPassword = false
    }
  }
  displayPassword(){
    if(this.isPassword){
      return;
    }
    else{
      this.isAccount = false;
      this.isPassword = true;
    }

  }
  
 
}
