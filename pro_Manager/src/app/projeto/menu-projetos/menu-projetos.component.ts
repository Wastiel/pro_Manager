import { Component } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto.service';
import { Projeto } from '../projeto';

@Component({
  selector: 'app-menu-projetos',
  templateUrl: './menu-projetos.component.html',
  styleUrls: ['./menu-projetos.component.scss']
})
export class MenuProjetosComponent {
  panelOpenState = false;


  constructor(private _projetoService: ProjetoService){ }
  public projeto!: Projeto[];

  ngOnInit(){
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
      )
    }
}


