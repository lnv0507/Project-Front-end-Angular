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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user=this.userService.user;
  }

}
