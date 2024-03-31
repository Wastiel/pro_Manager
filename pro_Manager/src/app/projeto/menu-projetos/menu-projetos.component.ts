import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Projeto } from '../projeto';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalProjetoComponent } from '../modal-projeto/modal-projeto.component';



@Component({
  selector: 'app-menu-projetos',
  templateUrl: './menu-projetos.component.html',
  styleUrls: ['./menu-projetos.component.scss']
})
export class MenuProjetosComponent {

  //@Input() align: 'start' | 'center' | 'end' = 'center';

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



    openModal(): void {
      const dialogRef = this.dialog.open(ModalProjetoComponent, {
        height: '250px',
        width: '400px'
      });

      dialogRef.componentInstance.modalClosed.subscribe(() => {
        this.carregarProjetos(); // Recarregar os projetos após o fechamento do modal
      });
    }

}



