import { Component, OnInit } from '@angular/core';
import { ContatoModel } from './../contato.model';
import { MessageService } from '../message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contato : ContatoModel = new ContatoModel();
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  send(){
    this.messageService.sendMessage(this.contato).subscribe(result =>{
      console.log(result)
      Swal.fire('Formulário de contato', 'Mensagem enviada com sucesso', 'success');
    }, err =>{
      console.log(err)
      Swal.fire('Formulário de contato', 'Falha no envio da mensagem', 'error');
    });
  }

}
