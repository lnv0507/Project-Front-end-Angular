import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { HistoryOrder} from 'src/app/model/history-order';
import { CartService } from 'src/app/Services/cart.service';
import { HistoryOrderService } from 'src/app/Services/history-order.service';
import { UserService } from 'src/app/Services/user.service';
import { VoucherService } from 'src/app/Services/voucher.service';
import { DatePipe } from '@angular/common';

export function checkTotalPrice(){
  return (c : AbstractControl) =>{
    return (c.value === 0) ?{
      invalidPrice : true
    } : null;
  };
}

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss'],
  providers: [DatePipe]
})
export class CheckoutDetailComponent implements OnInit {
  checkoutForm!: FormGroup
  user!: User;
  items : any;
  note = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService : UserService,
    private voucherService: VoucherService,
    private cartService: CartService,
    private historyOrderService: HistoryOrderService,
    private router : Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    if(this.userService.getCheckLogin()){
      this.user = this.userService.user;
    }else{
      this.user = new User();
      this.user.name = '';
      this.user.address ='';
      this.user.email = '';
      this.user.phone = '';
    }

    this.checkoutForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      address: [this.user.address, Validators.required],
      phone: [this.user.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]+$")]],
      email: [this.user.email, [Validators.required, Validators.email, gmailValidate]],
      note: '',
      totalPrice: [this.getAllTotal(), checkTotalPrice() ]
    })
  }
  getDisCount(){
    return this.voucherService.getDiscount();
  }
  getAllTotal(){
    return this.cartService.getTotal() - this.getDisCount();
  }
  sendOrder(){
    const orderInfo : Order = new Order();
    orderInfo.name = this.checkoutForm.controls.name.value;
    orderInfo.address =  this.checkoutForm.controls.address.value;
    orderInfo.phone = this.checkoutForm.controls.phone.value;
    if(this.checkoutForm.controls.note.value.trim() === ''){
      orderInfo.note = "Không có ghi chú gì."
    }
    else{
      orderInfo.note = this.checkoutForm.controls.note.value;
    }
    this.cartService.orderInfo = orderInfo;
    this.saveHistoryOrder();
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/donhang';
    this.router.navigateByUrl(returnUrl);
  }


  saveHistoryOrder(){
    const listOrder = this.cartService.getCartItems();
    const id = this.historyOrderService.getData().length + 1 +'';
    const orderHistory = new HistoryOrder();

    orderHistory.id = id;
    if(this.userService.getCheckLogin()){
      orderHistory.userId = this.userService.user.id
    }
    else{
      orderHistory.userId = "0";
    }
    const date = new Date()
    orderHistory.date = date.getDate() + "/" + (date.getMonth() + 1)+ "/" + date.getFullYear();
    orderHistory.discount = this.voucherService.getDiscount();
    orderHistory.total = this.cartService.getTotal() - this.voucherService.getDiscount();
    orderHistory.listOrder = listOrder;
    
    this.historyOrderService.addHistoryOrder(orderHistory).subscribe(data =>{
      console.log(data);
    })

    
  }

}
function gmailValidate(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')){
    return null
  }
  return {gmail: true}
}
