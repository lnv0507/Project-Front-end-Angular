import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Voucher } from '../model/voucher';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private httpClient : HttpClient, private cartService : CartService) { }

  public getVoucher(): Observable<Voucher[]> {
    // lay dia chi ra vo database la do an
    const url = `http://localhost:3000/voucher`;
    return this.httpClient
      .get<Voucher[]>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend return code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; Please try again later.');
  }

  listVoucher : Array<Voucher> = [];
  checkVoucher :boolean = false;
  checkMessage : boolean = false;
  message : String = "";
  voucher: Voucher = new Voucher();

  public getVoucherData(){
    this.getVoucher().subscribe((data) =>{
      this.listVoucher = data;
    });
    return this.listVoucher;
  }

  public applyVoucher(nameVoucher: String){
    if(this.checkVoucher) this.checkVoucher = false;
    const listVoucher: Array<Voucher> = this.getVoucherData();
    for(let v of listVoucher){
      if(v.id === nameVoucher){
        this.voucher = v;
        this.checkVoucher = true;
      }
    }
    if(!this.checkVoucher){
      this.checkMessage = true;
      this.message = "Mã ưu đãi không hợp lệ, vui lòng nhập mã khác!"
    }
  }
  public getDiscount(){
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
  public getCheckMessage(){
    return this.checkMessage;
  }
  public getMessage(){
    return this.message;
  }




}
