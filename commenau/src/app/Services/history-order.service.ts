import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HistoryOrder } from '../model/history-order';

@Injectable({
  providedIn: 'root'
})
export class HistoryOrderService {
  historyOrders!: Array<HistoryOrder>;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private httpClient: HttpClient) {

  }

  public getHistoryOrders(): Observable<HistoryOrder[]> {
    // lay dia chi ra vo database la do an
    const url = `http://localhost:3000/historyOrder`;
    return this.httpClient
      .get<HistoryOrder[]>(url, this.httpOptions)
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

  public getListOrderById(idUser: String) {
    const orders = this.historyOrders.filter(item => {
      return item.userId === idUser;
    });
    return orders;
  }

  public getData() {
    this.getHistoryOrders().subscribe(data => {
      this.historyOrders = data;
    });

  }

  public addHistoryOrder(historyOrder: HistoryOrder) {
    return this.httpClient.post('http://localhost:3000/historyOrder/', historyOrder);
  }



}
