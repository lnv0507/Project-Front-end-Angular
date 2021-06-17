import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
const routersConfig: Routes = [
  { path: 'dangnhap', component: LoginComponent },
  { path: 'giohang', component: CartComponent },
  { path: '', component: MyhomeComponent },
  { path: 'trangchu', component: MyhomeComponent },
  { path: 'dangky', component: RegisterComponent },
  { path: 'quenmatkhau', component: ForgotPasswordComponent },
  { path: 'thanhtoan', component: CheckoutComponent },
  { path: 'chitietsanpham', component: ShopDetailComponent },
  { path: 'menu', component: ProductsComponent },
  { path: 'lienhe', component: ContactComponent },
  { path: 'vechungtoi', component: AboutComponent },
  { path: 'kiemtra', component: VerifyComponent },
  { path: 'yeuthich', component: WishlistComponent },
  { path: '**', component: Page404Component },
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderVipComponent } from './header-vip/header-vip.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyComponent } from './verify/verify.component';
import { CartComponent } from './cart/cart.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Page404Component } from './page404/page404.component';
import { OrderComponent } from './order/order.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductDirective } from './directives/product.directive';
import { ProductsService } from './Services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { BreakcumbComponent } from './products/breakcumb/breakcumb.component';
import { FilterComponent } from './products/filter/filter.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { ProductDayComponent } from './myhome/product-day/product-day.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    HeaderVipComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyComponent,
    CartComponent,
    ShopDetailComponent,
    CheckoutComponent,
    Page404Component,
    OrderComponent,
    DetailCustomerComponent,
    ContactComponent,
    ProductDirective,
    ProductsComponent,
    BreakcumbComponent,
    FilterComponent,
    ProductListComponent,
    MyhomeComponent,
    ProductDayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routersConfig),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
