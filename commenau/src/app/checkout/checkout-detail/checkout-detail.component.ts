import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.scss']
})
export class CheckoutDetailComponent implements OnInit {
  checkoutForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

}
