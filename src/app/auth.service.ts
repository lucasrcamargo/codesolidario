import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuth : boolean;
  @Output() loginEmmiter : EventEmitter<boolean> = new EventEmitter();
  @Output() idUser : EventEmitter<any> = new EventEmitter();
  perfil;
  token;
  constructor(private http: HttpClient, private route: Router) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser;
   }

  fazerLogin(login: LoginModel):Observable<any>{
    return this.http.post<any>("https://codesolidario-api.herokuapp.com/usuario/login", login)
    .pipe(
      map(user =>{
        if(user){
          this.userAuth = true;
          this.loginEmmiter.emit(true);
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      return user;
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.route.navigate(['/']);
  }
  Userlogged(){
    return this.userAuth;
  }
}
