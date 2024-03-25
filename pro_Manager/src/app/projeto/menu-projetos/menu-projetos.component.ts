import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Projeto } from '../projeto';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-menu-projetos',
  templateUrl: './menu-projetos.component.html',
  styleUrls: ['./menu-projetos.component.scss']
})
export class MenuProjetosComponent {  

  //@Input() align: 'start' | 'center' | 'end' = 'center';
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;

  form!: FormGroup;
  submitted = false;  
  public projeto!: Projeto[];
  panelOpenState = false;  

  constructor(private _projetoService: ProjetoService, public dialog: MatDialog, private fb: FormBuilder, private snackbarService: SnackbarService){ }
  

  ngOnInit(){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      descricao: ['']      
    });

    this.carregarProjetos();
  }

    carregarProjetos(){
      this._projetoService.getProjeto()
      .subscribe(
        retorno =>{
          this.projeto = retorno.map (
            item=>
            {
              return new Projeto(
                item.id,
                item.nome,
                item.descricao
              )
            }
          )
        }
      );
    }
    

    adicionarProjeto(): void {
      if (this.form.valid) {
        const novoProjeto: Projeto = this.form.value;
        this._projetoService.setProjeto(novoProjeto).subscribe(
          (resposta) => {
            console.log('Projeto adicionado com sucesso:', resposta);
            this.fecharModal();
            this.carregarProjetos();
            this.showMessage('Projeto adicionado com sucesso!');
          },
          (erro) => {
            console.error('Erro ao adicionar projeto:', erro);
            this.showMessage('Erro ao adicionar projeto. Por favor, tente novamente.');
          }
        );        
      }
    }

    openModal(): void {
      const dialogRef = this.dialog.open(this.modalContent, {
        height: '250',
        width: '400px',
         // Largura da modal
      });
    }
  
    fecharModal(): void {
      this.dialog.closeAll();
    }
    showMessage(message: string): void {
      this.snackbarService.openSnackbar(message);
    }  

    errorMessage = '';

    updateErrorMessage() {
      if (this.form.get('nome')?.hasError('required')) {
        this.errorMessage = 'Você deve entrar com um valor válido';
      } else if (this.form.get('nome')?.hasError('maxlength')) {
        this.errorMessage = 'campo maximo 10 caracteres';
      } else if (this.form.get('nome')?.hasError('minlength')) {
        this.errorMessage = 'campo deve conter no minimo 10 caracteres';
      } else {
        this.errorMessage = '';
      }
    }
}



