import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
const routersConfig: Routes = [
  { path: 'dangnhap', component: LoginComponent },
  { path: 'giohang', component: CartComponent },
  { path: '', component: BodyComponent },
  { path: 'trangchu', component: BodyComponent },
  { path: 'dangky', component: RegisterComponent },
  { path: 'quenmatkhau', component: ForgotPasswordComponent },
  { path: 'thanhtoan', component: CheckoutComponent },
  { path: 'chitietsanpham', component: ShopDetailComponent },
  { path: 'menu', component: MenuComponent },
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
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';


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
    MenuComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routersConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
