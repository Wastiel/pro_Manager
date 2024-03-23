import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from '../projeto/projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/projeto";

  getProjeto() : Observable<Projeto[]>{
    return this._httpClient.get<Projeto[]>(this.url);

  }

}
