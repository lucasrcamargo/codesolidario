import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ideias',
  templateUrl: './lista-ideias.component.html',
  styleUrls: ['./lista-ideias.component.css']
})
export class ListaIdeiasComponent implements OnInit {

  constructor(private service: MessageService, private route: Router) { }
  ideias: [];
  ngOnInit() {
    this.load();
    this.listarIdeias();
  }
  load() {
    //Session storage salva os dados como string
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }

  listarIdeias(){
    this.service.listarIdeias().subscribe(ideias =>{
      this.ideias = ideias;
    });
  }

}
