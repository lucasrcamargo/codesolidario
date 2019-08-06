import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdeiasModel } from './ideias.model';
import { ContatoModel } from './contato.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) { }
  cadIdeia(ideia: IdeiasModel) : Observable<any>{
    return this.http.post("https://codesolidario-api.herokuapp.com/ideias/", ideia);
  }
  listarIdeias() : Observable<any>{
    return this.http.get("https://codesolidario-api.herokuapp.com/ideias/");
  }
  sendMessage(contato: ContatoModel) : Observable<any>{
    return this.http.post("https://codesolidario-api.herokuapp.com/contato/", contato);
  }
  deletaIdeia(id) : Observable<any>{
    return this.http.delete("https://codesolidario-api.herokuapp.com/ideias/"+id);
  }
}
