import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgControlStatus, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private formBuilder :FormBuilder) { 
    this.formRegister = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', Validators.required),
      re_password: new FormControl('', Validators.required)
    },
    {
      validators : this.MustMatch('password', 're_password')
    })
  }

  ngOnInit(): void {
    
  }

  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup : FormGroup) =>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch: true});
      }else{
        matchingControl.setErrors(null);
      }
    }
  }
  onSubmit(){
    console.log(this.formRegister.value);
  }
  
  

}
