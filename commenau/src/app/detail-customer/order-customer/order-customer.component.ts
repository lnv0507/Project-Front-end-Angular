import { Component, OnInit } from '@angular/core';
import { HistoryOrder } from 'src/app/model/history-order';

import { HistoryOrderService } from 'src/app/Services/history-order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-order-customer',
  templateUrl: './order-customer.component.html',
  styleUrls: ['./order-customer.component.scss']
})
export class OrderCustomerComponent implements OnInit {
  
  historyOrderList!:Array<HistoryOrder>;
  
  constructor(private historyOrderService: HistoryOrderService, private userService : UserService) {
  }

  ngOnInit(): void {

  }

  getHistoryOrders(){
    const idUser = this.userService.user.id;
    this.historyOrderList = this.historyOrderService.getData().filter(item =>{
      return item.userId === idUser;
    });

    return this.historyOrderList;
  }
  
  



}
