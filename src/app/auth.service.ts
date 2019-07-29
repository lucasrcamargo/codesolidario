import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuth : boolean = false;
  @Output() loginEmmiter : EventEmitter<boolean> = new EventEmitter();
  @Output() idUser : EventEmitter<any> = new EventEmitter();
  perfil;
  constructor(private http: HttpClient, private route: Router) { }

  fazerLogin(login: LoginModel){
    this.http.post<any>("https://codesolidario-api.herokuapp.com/usuario/login", login).subscribe(usuario =>{
      this.userAuth = true;
      this.idUser.emit(usuario.idUser);
      this.loginEmmiter.emit(true);
      console.log(usuario.perfil);
      if(usuario.perfil == "admin"){
        this.route.navigate(['/lista-ideias']);
      }
      else{
        this.route.navigate(['/']);
      }
    })
  }
}
