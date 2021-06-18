import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product = new Product();
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  // lay dia chi ser ver phai chay localhost moi lay dc data

  constructor(private httpClient: HttpClient) {}

  // lay product out
  public getProduct(): Observable<Product[]> {
    // lay dia chi ra vo database la do an
    const url = `${this.REST_API_SERVER}/product`;
    return this.httpClient
      .get<Product[]>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getProductById(id :any){
    return this.httpClient.get("http://localhost:3000/product/" + id)
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

  
}
