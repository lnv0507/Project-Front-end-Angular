import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import {MatTabsModule} from '@angular/material/tabs';


const routersConfig: Routes = [
  { path: 'dangnhap', component: LoginComponent },
  { path: 'giohang', component: CartComponent },
  { path: '', component: MyhomeComponent },
  { path: 'trangchu', component: MyhomeComponent },
  { path: 'dangky', component: RegisterComponent },
  { path: 'quenmatkhau', component: ForgotPasswordComponent },
  { path: 'thanhtoan', component: CheckoutComponent },
  { path: 'chitietsanpham/:productId', component: ShopDetailComponent },
  { path: 'menu', component: ProductsComponent },
  { path: 'lienhe', component: ContactComponent },
  { path: 'vechungtoi', component: AboutComponent },
  { path: 'kiemtra', component: VerifyComponent },
  { path: 'thongtin', component: DetailCustomerComponent},
  { path : 'donhang', component: OrderComponent},
  { path: '**', component: Page404Component },
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
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
import { ProductDirective } from './directives/product.directive';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { BreakcumbComponent } from './products/breakcumb/breakcumb.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { ProductDayComponent } from './myhome/product-day/product-day.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CartTotalComponent } from './cart/cart-total/cart-total.component';
import { CheckoutAccountComponent } from './checkout/checkout-account/checkout-account.component';
import { CheckoutCouponComponent } from './checkout/checkout-coupon/checkout-coupon.component';
import { CheckoutDetailComponent } from './checkout/checkout-detail/checkout-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { BreakcumbAboutComponent } from './about/breakcumb-about/breakcumb-about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartHeaderComponent } from './header-vip/cart-header/cart-header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { AccountCustomerComponent } from './detail-customer/account-customer/account-customer.component';
import { PasswordCustomerComponent } from './detail-customer/password-customer/password-customer.component';
import { OrderCustomerComponent } from './detail-customer/order-customer/order-customer.component';
import { DialogComponent } from './dialog/dialog.component';
import { WishlistCustomerComponent } from './detail-customer/wishlist-customer/wishlist-customer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
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
    ProductListComponent,
    MyhomeComponent,
    ProductDayComponent,
    CartDetailComponent,
    CartTotalComponent,
    CheckoutAccountComponent,
    CheckoutCouponComponent,
    CheckoutDetailComponent,
    BreakcumbAboutComponent,
    CartHeaderComponent,
    AccountCustomerComponent,
    PasswordCustomerComponent,
    OrderCustomerComponent,
    DialogComponent,
    WishlistCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routersConfig),
    HttpClientModule,
    NgxPaginationModule, Ng2SearchPipeModule, Ng2OrderModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    NgxNavbarModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
