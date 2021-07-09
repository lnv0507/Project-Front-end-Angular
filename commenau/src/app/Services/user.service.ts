import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private currentUserSubject!: BehaviorSubject<User>;
  // public currentUser!: Observable<User>;
  listUser: Array<User> = [];
  user: User=new User();
  message : String = "";
  checkLogin: boolean = false;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
    private router: Router,) {}
  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }
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


  public putUser(id: any, user: User) {
    return this.httpClient.put('http://localhost:3000/user/' + id, user);
  }
  public addUser(user: User) {
    return this.httpClient.post('http://localhost:3000/user/', user);
  }
  public getUserData() {
    this.getUser().subscribe((data) => {
      this.listUser = data;
    });
    return this.listUser;
  }
  public getListPhone() {
    const phones: string[] = [];
    this.getUser().subscribe((data) => {
      for (let i of data) {
        phones.push(i.phone);
      }
    });
    return phones;
  }



  public login(phone: any,password:any){
    const listUser=this.getUserData();
    for(let u of listUser){
      if(u.phone===phone && u.password===password){
        this.user=u;
        this.checkLogin=true;
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/trangchu';
        this.router.navigateByUrl(returnUrl);
        this.message="";


      }
      else{
        this.message="Sai thông tin đăng nhập"

      }
    }
    return this.user;


  }
  public getMessage(){
    return this.message;
  }

  logout() {
      this.user=new User();
      this.checkLogin=false;
      this.message="";
      return this.user;
  }
  public getCheckLogin(){
    return this.checkLogin;
  }
}
