import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/Services/user.service';

export function checkExistPhone(phones: any = []){
  return (c : AbstractControl) =>{
    return (phones.includes(c.value)) ?{
      invalidphone : true
    } : null;
  };
}

@Component({
  selector: 'app-account-customer',
  templateUrl: './account-customer.component.html',
  styleUrls: ['./account-customer.component.scss']
})
export class AccountCustomerComponent implements OnInit {
  display = false;
  displayAlert = false;
  user!: User;
  customForm! : FormGroup;
  urlImg!: string;
  constructor(private userService: UserService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.urlImg = this.userService.user.urlImg;
    this.user=this.userService.user;
    this.customForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email, gmailValidate]],
      address: [this.user.address, Validators.required],
      phone: [this.user.phone, [Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10), checkExistPhone(this.getListPhone())]],
    });
  }

  closeAlert(){
    this.displayAlert = false;
  }

  updateProfile(){
    console.log(this.customForm.value);
    this.user.name = this.customForm.controls.name.value;
    this.user.phone = this.customForm.controls.phone.value;
    this.user.address = this.customForm.controls.address.value;
    this.user.email = this. customForm.controls.email.value;
    this.user.urlImg = this.urlImg;
    this.userService.updateUser(this.user).subscribe((data)=>{
      console.log(data);
    })
    this.display = false;
    this.displayAlert = true;
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
  displayPhone(){
    this.display = !this.display;
  }
  onFileSelected(event: any) {
    if(event.target.files.length > 0) 
     {

      this.urlImg= "assets/img/avatar/" + event.target.files[0].name;
      this.userService.urlImgUser = "assets/img/avatar/" + event.target.files[0].name;
     }
  }

}
function gmailValidate(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')){
    return null
  }
  return {gmail: true}
}
