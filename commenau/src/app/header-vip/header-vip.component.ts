import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-vip',
  templateUrl: './header-vip.component.html',
  styleUrls: ['./header-vip.component.scss'],
})
export class HeaderVipComponent implements OnInit {
  header_variable = false;
  search_click = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:scroll')
  scroolFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
  searchClick() {
    if (this.search_click) {
      this.search_click = false;
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        this.header_variable = true;
      } else {
        this.header_variable = false;
      }
    } else {
      this.search_click = true;
      this.header_variable = true;
    }
    // if (this.search_click) {
    //   document.body.style.backgroundColor = 'gray';
    //   document.body.style.zIndex = '99999999';
    //   document.body.style.position = 'absolute';
    // } else {
    //   document.body.style.backgroundColor = 'red';
    // }

    // Note : Làm mờ khi click search mà chưa ra :))
  }
 
}
