import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private httpClient : HttpClient) { }
  public getUser(): Observable<User[]> {
    // lay dia chi ra vo database la do an
    const url = `http://localhost:3000/user`;
    return this.httpClient
      .get<User[]>(url, this.httpOptions)
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
  listUser: Array<User> = [];

  public putUser(id: any, user : User){
    return this.httpClient.put('http://localhost:3000/user/' + id, user);
  }
  public addUser(user: User){
    return this.httpClient.post('http://localhost:3000/user/',user)
  }
  public getUserData(){
    this.getUser().subscribe((data) =>{
      this.listUser = data;
    });
    return this.listUser;
  }
  




}
