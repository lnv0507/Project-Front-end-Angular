import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-checkout-account',
  templateUrl: './checkout-account.component.html',
  styleUrls: ['./checkout-account.component.scss']
})
export class CheckoutAccountComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserData();
    this.form = this.formBuilder.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  get f() {
    return this.form.controls;
  }
  showAccount = false;

  displayAccount() {
    this.showAccount = !this.showAccount;

  }
  onSubmit() {
    if (this.form.invalid) {
      this.error = "Sai thông tin đăng nhập";
      return;
    }
    this.showAccount = false;
    this.userService.login(this.f.phone.value, this.f.password.value, '/thanhtoan');


  }
  getMessage() {
    return this.userService.getMessage();
  }


}
