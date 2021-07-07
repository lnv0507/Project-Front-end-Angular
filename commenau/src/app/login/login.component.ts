import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  //   if (this.userService.currentUserValue) { 
  //     this.router.navigate(['/']);
  // }
  }

  ngOnInit(): void {
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    console.log(this.f.phone.value, this.f.password.value);
    this.submitted = true;

    // if (this.form.invalid) {
    //   return;
    // }
    // this.loading = true;
    // this.userService
    //   .login(this.f.phone.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe({
    //     next: () => {
    //         // get return url from query parameters or default to home page
            
    //         const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //         this.router.navigateByUrl(returnUrl);
            
    //     },
    //     error: error => {
    //        alert(error)
    //        this.loading = false;
    //     }
    // });
  }
}
