import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      re_password: new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    console.log(this.formRegister.value);
    
  }
  
  

}
