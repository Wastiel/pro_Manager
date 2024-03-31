import { ProjetoService } from './../../services/projeto.service';
import { Projeto } from './../../projeto/projeto';
import { AtividadeService } from './../service/atividade.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, of } from 'rxjs';
import { SnackbarService } from 'src/app/shared/shared/service/snackbar.service';
import { atividade } from '../model/atividade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-atividade',
  templateUrl: './menu-atividade.component.html',
  styleUrls: ['./menu-atividade.component.scss']
})
export class MenuAtividadeComponent implements OnInit{

  selectedValue!: number;

  //atividades$: Observable<atividade[]>;
  projetos$: Observable<Projeto[]>; // Altere para Observable

  displayedColumns = ['id','name', 'descricao', 'projeto'];
  hide: any;
  selectedProjeto!: number;
  form!: FormGroup;
  errorMessage: any;

  constructor(private AtividadeService: AtividadeService,
    private SnackbarService: SnackbarService,
    private ProjetoService: ProjetoService,
    private form_atividade: FormBuilder){

    /*this.atividades$ = this.AtividadeService.list()
      .pipe(
        catchError(error => {
          this.showMessage('erro ao carregar atividade')
          return of([])
        })
      );*/

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
    this.SnackbarService.openSnackbar(message);
  }

  ngOnInit(){
    this.form = this.form_atividade.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      descricao: [''],
      id_projeto: ['', [Validators.required]]
    });
  }

  adicionarAtividade(): void {
    if (this.form.valid) {
      const novaAtividade = this.form.value;
      this.AtividadeService.setProjeto(novaAtividade).subscribe(
        (resposta) => {
          console.log('Projeto adicionado com sucesso:', resposta);
          this.showMessage('Projeto adicionado com sucesso!');
        },
        (erro) => {
          console.error('Erro ao adicionar projeto:', erro);
          this.showMessage('Erro ao adicionar projeto. Por favor, tente novamente.');
        }
      );
    }
  }
  updateErrorMessage() {
    if (this.form.get('nome')?.hasError('required')) {
      this.errorMessage = 'Você deve entrar com um valor válido';
    } else if (this.form.get('nome')?.hasError('maxlength')) {
      this.errorMessage = 'Novo Projeto deve conter no máximo 10 caracteres';
    } else if (this.form.get('nome')?.hasError('minlength')) {
      this.errorMessage = 'Novo Projeto deve conter no mínimo 3 caracteres';
    } else {
      this.errorMessage = '';
    }
  }
}
