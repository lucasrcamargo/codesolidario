import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdeiasModel } from './ideias.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) { }
  cadIdeia(ideia: IdeiasModel) : Observable<any>{
    return this.http.post("https://codesolidario-api.herokuapp.com/ideia", ideia);
  }
}
