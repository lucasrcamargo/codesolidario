import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { LoginModel } from './../login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login: LoginModel = new LoginModel;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  fazerLogin(){
    this.authService.fazerLogin(this.login);
  }

}
