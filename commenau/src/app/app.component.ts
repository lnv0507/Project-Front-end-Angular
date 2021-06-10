import { Route } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'commenau';
  menu_header:string = "menu-header";
  menu_header2:string= "menu-header2";
  constructor(public router:Router){

  }
}
