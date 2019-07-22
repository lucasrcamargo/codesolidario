import { Component, OnInit } from '@angular/core';
import { IdeiasModel } from './../ideias.model';
import { MessageService } from './../message.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-ideias-form',
  templateUrl: './ideias-form.component.html',
  styleUrls: ['./ideias-form.component.css']
})
export class IdeiasFormComponent implements OnInit {
  ideia: IdeiasModel = new IdeiasModel();
  message;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  send(){
    this.messageService.sendMessage(this.ideia).subscribe(() =>{
      Swal.fire('Formulário de ideias', 'Mensagem enviada com sucesso', 'success');
    }, err =>{
      Swal.fire('Formulário de ideias', 'Falha no envio da mensagem', 'error');
    });
  }

}
