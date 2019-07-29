import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() logged;
  constructor(private auth: AuthService) { }
  ngOnInit() {

  }
  logout(){
    this.auth.logout();
  }
}
