import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm! : FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name : ['', Validators.required],
      email: ['', [Validators.required, Validators.email, gmailValidate]],
      message:['', [Validators.required, Validators.minLength(20)]],
    });
  }
  sendContact(){

  }

}
function gmailValidate(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')){
    return null
  }
  return {gmail: true}
}
