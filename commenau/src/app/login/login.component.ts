import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading=false;
  submitted=false;
  
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    
  }
  get f(){
    return this.form.controls;
  }
  onSubmit(){
    console.log(this.form);

  }
  
 

}
