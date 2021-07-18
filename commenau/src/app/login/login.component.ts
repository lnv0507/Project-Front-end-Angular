
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  error = '';


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {

  }

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
  onSubmit() {
    if (this.form.invalid) {
      this.error = "Sai thông tin đăng nhập";
      return;
    }
    this.userService.login(this.f.phone.value, this.f.password.value,'/trangchu');
  }
  getMessage() {
    return this.userService.getMessage();
  }

}
