import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    NgxPaginationModule,Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [ProductListComponent],
})
export class ProductListModule {}
