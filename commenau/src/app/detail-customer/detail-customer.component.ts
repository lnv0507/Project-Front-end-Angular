import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../Services/user.service';

export function checkExistPhone(phones: any = []){
  return (c : AbstractControl) =>{
    return (phones.includes(c.value)) ?{
      invalidphone : true
    } : null;
  };
}
@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {
  user!: User;
  display = false;
  customForm! : FormGroup

  constructor(private userService: UserService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.user=this.userService.user;
    this.customForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email, gmailValidate]],
      address: [this.user.address, Validators.required],
      phone: [this.user.phone, [Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10), checkExistPhone(this.getListPhone())]],
    })
  }

  updateProfile(){
    console.log(this.customForm.value);
    this.user.name = this.customForm.controls.name.value;
    this.user.phone = this.customForm.controls.phone.value;
    this.user.address = this.customForm.controls.address.value;
    this.user.email = this. customForm.controls.email.value;
    this.userService.updateUser(this.user).subscribe((data)=>{
      console.log(data);
    })
    this.display = false;
    
  }
  displayPhone(){
    this.display = !this.display;
  }
  getListPhone(){
    const listPhone  = [];
    for(let u of this.userService.getUserData()){
      if(u.phone !== this.user.phone){
        listPhone.push(u.phone);
      }
    }
    return listPhone;
  }

}
function gmailValidate(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')){
    return null
  }
  return {gmail: true}
}