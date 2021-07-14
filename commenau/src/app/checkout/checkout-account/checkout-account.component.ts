import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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

  displayAccount(){
    this.showAccount = !this.showAccount;
  }
  onSubmit() {
    if (this.form.invalid) {
      this.error = "Sai thông tin đăng nhập";
      return;
    }
    this.userService.login(this.f.phone.value, this.f.password.value);
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/thanhtoan';
    this.router.navigateByUrl(returnUrl);

  }
  getMessage() {
    return this.userService.getMessage();
  }
  

}
