import { Component, OnInit } from '@angular/core';
import { atividade } from '../model/atividade';
import { Projeto } from 'src/app/projeto/projeto';
import { Observable, catchError, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtividadeService } from './../service/atividade.service';
import { ProjetoService } from './../../services/projeto.service';


@Component({
  selector: 'app-tabela-atividade',
  templateUrl: './tabela-atividade.component.html',
  styleUrls: ['./tabela-atividade.component.scss']
})
export class TabelaAtividadeComponent implements OnInit{

  atividades$: Observable<atividade[]>;
  projetos$: Observable<Projeto[]>;

  displayedColumns = ['id','name', 'descricao', 'projeto'];

  constructor(private AtividadeService: AtividadeService,
    private ProjetoService: ProjetoService){

      this.atividades$ = this.AtividadeService.list()
      .pipe(
        catchError(error => {
          this.showMessage('erro ao carregar atividade')
          return of([])
        })
      );

    this.projetos$ = this.ProjetoService.getProjeto(); // Remova o subscribe

    // Remova a atribuição dentro do subscribe
    // Subscrição desnecessária pois projetos$ já é um Observable que pode ser usado diretamente no template

    this.projetos$.subscribe(
      projetos => {
        // Não precisa mais dessa atribuição
      },
      error => {
        this.showMessage('Erro ao carregar atividades');
      }
    );
  }

  showMessage(message: string): void {
    //this.SnackbarService.openSnackbar(message);
  }

  ngOnInit(){ }


}
