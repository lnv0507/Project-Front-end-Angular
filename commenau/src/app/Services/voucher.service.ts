import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Voucher } from '../model/voucher';

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

  constructor(private httpClient : HttpClient) { }

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

  public getVoucherData(){
    this.getVoucher().subscribe((data) =>{
      this.listVoucher = data;
    });
    return this.listVoucher;
  }



}
