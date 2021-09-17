import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/Services/user.service';
import {Md5} from "md5-typescript";

export function checkCurentPasssword(curentPassword : any){
  return (c : AbstractControl) =>{
    return (curentPassword !== Md5.init(c.value)) ?{
      invalidphone : true
    } : null;
  };
}

@Component({
  selector: 'app-password-customer',
  templateUrl: './password-customer.component.html',
  styleUrls: ['./password-customer.component.scss']
})
export class PasswordCustomerComponent implements OnInit {
  user!: User;
  passwordForm! : FormGroup;
  displayAlert = false;
  constructor(private userService: UserService, private formBuilder : FormBuilder) { 

  }

  ngOnInit(): void {
    this.user=this.userService.user;
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, checkCurentPasssword(this.userService.user.password)]],
      changePasword:['', [Validators.required, Validators.minLength(6)]],
      rePassword:['', [Validators.required]]
    },
    {
      validators : this.MustMatch('changePasword', 'rePassword')
     });
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

  changePassword(){
    this.user.password = Md5.init(this.passwordForm.controls.changePasword.value);
    this.userService.updateUser(this.user).subscribe((data)=>{
      console.log(data);
    });
    this.displayAlert = true;
  }
  closeAlert(){
    this.displayAlert = false;
  }

}
