import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { WishlistService } from './wishlist.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  dataProduct!: Product[];
  dataProduct2: Array<Product> = [];
  private wistListService!: WishlistService;
  weekDays = [
    { day: 'Thứ 2' },
    { day: 'Thứ 3' },
    { day: 'Thứ 4' },
    { day: 'Thứ 5' },
    { day: 'Thứ 6' },
    { day: 'Thứ 7' },
  ];
  product = new Product();
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  // lay dia chi ser ver phai chay localhost moi lay dc data

  constructor(private httpClient: HttpClient) { }

  // lay product out
  public getProduct(): Observable<Product[]> {
    // lay dia chi ra vo database la do an
    const url = `${this.REST_API_SERVER}/product`;
    return this.httpClient
      .get<Product[]>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getProductById(id: any) {
    return this.httpClient.get('http://localhost:3000/product/' + id);
  }

  // Test error of json
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
  // get all list product

  public connectProduct(): void {
    this.getProduct().subscribe((data) => {
      this.dataProduct = data;
    });

  }
  // List product follow day of weeks
  public productDay(day: String): Product[] {
    this.dataProduct2 = [];
    for (let i of this.dataProduct) {
      if (day === i.weekdays) {
        this.dataProduct2.push(i);
      }
    }
    this.dataProduct.forEach(element => {
      let parse = JSON.parse(localStorage.getItem(element.id + '') || '{}')
      if (JSON.stringify(parse) == 'true') {
        element.yeuthich = true;
      } else {
        element.yeuthich = false;
      }


    });
    // if (this.wistListService.getWishlistItems().length == 0) {
    //   this.dataProduct.forEach(element => {
    //     element.yeuthich = false;
    //   });
    // }

    return this.dataProduct2;
  }
  // Lay danh sach product theo ngay`
  public getDay() {
    let date = new Date();
    let th = date.getDay();
    let day_name = '';
    switch (th) {
      case 0:
        day_name = 'Chủ Nhật';
        break;
      case 1:
        day_name = 'Thứ 2';
        break;

      case 2:
        day_name = 'Thứ 3';
        break;

      case 3:
        day_name = 'Thứ 4';
        break;

      case 4:
        day_name = 'Thứ 5';
        break;

      case 5:
        day_name = 'Thứ 6';
        break;

      case 6:
        day_name = 'Thứ 7';
    }
    return day_name;
  }
  public getDayProduct() {
    let day_name = this.getDay();
    return this.productDay(day_name);
  }
  // check yeu thich luu lai vao localstrorage
  // public getCheckWishList() {
  //   this.getDayProduct().forEach(element => {
  //     let parse = JSON.parse(localStorage.getItem(element.id + '') || '{}')
  //     if (JSON.stringify(parse) == 'true')
  //       element.yeuthich = true;
  //     else
  //       element.yeuthich = false;
  //   });
  // }
  public getDataProduct() {
    return this.dataProduct;
  }
}
