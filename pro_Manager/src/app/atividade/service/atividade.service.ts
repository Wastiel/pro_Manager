import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, tap } from 'rxjs';
import { Projeto } from 'src/app/projeto/projeto';
import { atividade } from '../model/atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private readonly API = 'http://localhost:3000/atividade'
  //private url = "http://localhost:3000/projeto";
  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<atividade[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap((projetos)=>console.log(projetos))
    );
  }

  setProjeto(novaAtividade: atividade): Observable<Projeto> {
    return this.httpClient.post<Projeto>(this.API, novaAtividade);
  }
}
