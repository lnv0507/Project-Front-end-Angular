import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { VoucherService } from 'src/app/Services/voucher.service';
import { Voucher } from 'src/app/model/voucher';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  nameVoucher = "";
  checkVoucher = false;
  checkMessage = false;
  message : String = "hello";
  voucher: Voucher = new Voucher();

  constructor(private cartService: CartService, private voucherService: VoucherService) {}

  ngOnInit(): void {}
  getTotalAll() {
    var total = this.cartService.getTotal();
    return total - this.getDiscount();
  }
  getTotal(){
    return this.cartService.getTotal();
  }

  getDiscount(){
    var total = this.cartService.getTotal();
    if(this.checkVoucher && (total >= this.voucher.condition)){
      this.checkMessage = false;
      return total*this.voucher.percent + this.voucher.discount
    }
    if(this.checkVoucher && (total < this.voucher.condition)){
      this.checkMessage = true;
      this.message = "Không đủ điều kiện áp dụng mã! Tổng đơn hàng phải lớn hơn " + this.voucher.condition + "đ";
      return 0;
    }
    return 0;
  }
  applyVoucher(){
    if(this.checkVoucher) this.checkVoucher = false;
  const listVoucher: Array<Voucher> = this.voucherService.getVoucherData();
    for(let v of listVoucher){
      if(v.id === this.nameVoucher){
        this.voucher = v;
        this.checkVoucher = true;
      }
    }
  if(!this.checkVoucher){
    this.checkMessage = true;
    this.message = "Mã ưu đãi không hợp lệ, vui lòng nhập mã khác!"
  }
  console.log(this.checkMessage);
  console.log(this.checkVoucher)
  
  
   
  }
  
   

  
}
