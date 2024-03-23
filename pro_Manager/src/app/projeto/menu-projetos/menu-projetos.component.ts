import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Projeto } from '../projeto';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-menu-projetos',
  templateUrl: './menu-projetos.component.html',
  styleUrls: ['./menu-projetos.component.scss']
})
export class MenuProjetosComponent {
adicionarCampo(_t42: NgForm) {
throw new Error('Method not implemented.');
}


  @ViewChild('modalContent') modalContent!: TemplateRef<any>;

  form!: FormGroup;
  submitted = false;  

  panelOpenState = false;  

  constructor(private _projetoService: ProjetoService, public dialog: MatDialog, private fb: FormBuilder, ){ }
  public projeto!: Projeto[];

  ngOnInit(){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
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
          },
          (erro) => {
            console.error('Erro ao adicionar projeto:', erro);
          }
        );        
      }
    }

    openModal(): void {
      const dialogRef = this.dialog.open(this.modalContent, {
        width: '250px' // Largura da modal
      });
    }
  
    fecharModal(): void {
      this.dialog.closeAll();
    }
  
}


function carregarProjetos() {
  throw new Error('Function not implemented.');
}

