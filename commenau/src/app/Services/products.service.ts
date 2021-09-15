import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  dataProduct: Array<Product> = [];
  dataProduct2!: Array<Product>;
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
  userService: any;
  // lay dia chi ser ver phai chay localhost moi lay dc data

  constructor(private httpClient: HttpClient, userService: UserService) { }

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
  public getProductID(id: number) {
    const result =  this.dataProduct.find(data => {
      return data.id === id;
    });
    return result;
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
  public productDay(day: String) {
    this.dataProduct2 = [];
    for (let i of this.dataProduct) {
      if (day === i.weekdays) {
        this.dataProduct2.push(i);
      }
      // }
      // this.dataProduct.forEach(element => {
      //   let parse = JSON.parse(localStorage.getItem(element.id + '') || '{}')
      //   if (JSON.stringify(parse) == 'true') {
      //     element.favorite = true;
      //   } else {
      //     element.favorite = false;
    }

    // });

    return this.dataProduct2;
  }
  // Lay danh sach product theo ngay`
  public getDay() {
    let date = new Date(); // list date of computer
    let numberDay = date.getDay(); // get number day 0 1 2 3 4 5 6 7 same day
    let dayName = '';
    switch (numberDay) {
      case 0:
        dayName = 'Chủ Nhật';
        break;
      case 1:
        dayName = 'Thứ 2';
        break;

      case 2:
        dayName = 'Thứ 3';
        break;

      case 3:
        dayName = 'Thứ 4';
        break;

      case 4:
        dayName = 'Thứ 5';
        break;

      case 5:
        dayName = 'Thứ 6';
        break;

      case 6:
        dayName = 'Thứ 7';
    }
    return dayName;
  }
  public getDayProduct() {

    return this.productDay(this.getDay());
  }
  public getProductDay() {
    return this.getDayProduct();
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
