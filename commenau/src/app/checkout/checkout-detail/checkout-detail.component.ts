import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {
  checkoutForm!: FormGroup
  user!: User;
  constructor(private formBuilder: FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl(this.user.name, Validators.required),
      address: new FormControl(this.user.address, Validators.required),
      phone: new FormControl(this.user.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email, gmailValidate])
    })
  }

}
function gmailValidate(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')){
    return null
  }
  return {gmail: true}
}
