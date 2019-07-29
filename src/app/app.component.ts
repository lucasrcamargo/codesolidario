import { Component, Output, Input, Inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged;
  constructor(private auth: AuthService) { }
  ngOnInit() {
      this.logged = localStorage.getItem('currentUser')
  }
  
}
