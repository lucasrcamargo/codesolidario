import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { LoginModel } from './../login.model';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login: LoginModel = new LoginModel;
  mensagem;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  fazerLogin(){
    this.authService.fazerLogin(this.login).subscribe(usuario =>{
      if(usuario.perfil == "admin"){
        this.route.navigate(['/lista-ideias']);
      }
      else{
        this.route.navigate(['/']);
      }
      this.close();
    }, err =>{
      this.mensagem = err.error.message;
      console.log(this.mensagem);
      //location.reload();
      this.route.navigate(['/#login']);
    })
  }
  close(){
    $("#login").hide();
  }

}
