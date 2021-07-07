import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject!: BehaviorSubject<User>;
    public currentUser!: Observable<User>;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private httpClient : HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
   }
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
    
}
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
  public getListPhone(){
    const phones: string[] = [];
    this.getUser().subscribe((data) =>{
      for(let i of data){
        phones.push(i.phone);
      }
    })
    return phones;
  }

//   login(phone: any, password: any) {
//     return this.httpClient.post<User>(`http://localhost:3000/user/`, { phone, password })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));
//             this.currentUserSubject.next(user);
//             return user;
//         }));
        
// }

// logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
//     // this.currentUserSubject.next(null);
// }
  




}
