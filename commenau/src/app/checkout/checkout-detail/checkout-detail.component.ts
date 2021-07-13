import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import { VoucherService } from 'src/app/Services/voucher.service';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
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
    private router : Router,
    private route: ActivatedRoute
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
    })
  }
  getDisCount(){
    return this.voucherService.getDiscount();
  }
  getAllTotal(){
    return this.cartService.getTotal() - this.getDisCount();
  }
  sendOrder(){
    const orderInfo : Order = new Order()
    orderInfo.name = this.checkoutForm.controls.name.value;
    orderInfo.address =  this.checkoutForm.controls.address.value;
    orderInfo.phone = this.checkoutForm.controls.phone.value;
    if(this.checkoutForm.controls.note.value.trim() === ''){
      orderInfo.note = "Không có ghi chú gì"
    }
    else{
      orderInfo.note = this.checkoutForm.controls.note.value;
    }
    
    this.cartService.orderInfo = orderInfo;
    
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/donhang';
    this.router.navigateByUrl(returnUrl);
    
  }

}
function gmailValidate(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')){
    return null
  }
  return {gmail: true}
}
