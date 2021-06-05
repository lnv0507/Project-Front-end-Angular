import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
const routersConfig: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: HeaderMenuComponent },
  { path: 'trangchu', component: HeaderMenuComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'verify', component: VerifyComponent },
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
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CartComponent } from './cart/cart.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
    HeaderMenuComponent,
    CartComponent,
    ShopDetailComponent,
    CheckoutComponent,
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
