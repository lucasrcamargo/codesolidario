import { Component, OnInit } from '@angular/core';
import { IdeiasModel } from './../ideias.model';
import { MessageService } from './../message.service';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-ideias-form',
  templateUrl: './ideias-form.component.html',
  styleUrls: ['./ideias-form.component.css']
})
export class IdeiasFormComponent implements OnInit {
  ideia: IdeiasModel = new IdeiasModel();
  constructor(private messageService: MessageService, private route: Router) { }

  ngOnInit() {
  }
  send(){
    this.messageService.cadIdeia(this.ideia).subscribe(result =>{
      Swal.fire('Formulário de ideias', 'Mensagem enviada com sucesso', 'success');
    }, err =>{
      Swal.fire('Formulário de ideias', 'Falha no envio da mensagem', 'error');
    });
    this.close();
  }
  close(){
    $("#ideias").modal("hide");
  }

}
