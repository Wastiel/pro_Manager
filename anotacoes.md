Carido projeto angular pro_Manager, um gerenciador de atividades. 

Comçamos com git clone: 

git clone https://github.com/Wastiel/pro_Manager.git
Link do repositório: https://github.com/Wastiel/pro_Manager?tab=readme-ov-file#pro_manager

Adicionamos um git ignore para o angular (Pegamos do próprio GPT)

Adicionamos o material do angular, para pegar componentes prontos e ajustaveis. 

Vamos focar primeiramente em criar sometne a barra lateral e posterior vamos focar nos demais pontos. 

criamos os endpoints fake
	- npm install -g json-server
	- Criei o arquivo db.json
	- Adicionado o arquivo um json dentro do determinado arquivo:
		{
	"projeto": [
	        {"id": 1, "nome": "Pessoal", "descricao": "Projeto de origem pessoal"},
	        {"id": 2, "nome": "financeiro", "descricao": "Projeto de origem pessoal"},
	        {"id": 1, "nome": "Fisica", "descricao": "Projeto de origem pessoal"},
	        {"id": 1, "nome": "Estudo", "descricao": "Projeto de origem pessoal"}
	    ]
	}		

	- Depois pedimos para o json server olhar este arquivo.
	Pedimos para o json server olhar para o arquivo:
		json-server --watch db.json
		- http://localhost:3000/projeto
		ng g class projeto para criar a classe do projeto
	- Reorganizei a pasta do projeto
	- criei a pasta projeto
		- Coloquei o componente menu-projetos
		- coloquei o objeto projeto com os dados do meu projeto.
	Criei a pasta shared e coloquei dentro desta pasta os servico de projeto
	- importamos o http, para podermos usar o serviço 
	- Criei uma classe simples de funcionario:
		export class ProjetoService {

		  constructor(private _httpClient: HttpClient) { }
		  private url = "http://localhost:3000/projeto";

		  getProjeto() : Observable<Projeto[]>{
		    return this._httpClient.get<Projeto[]>(this.url);
		  }

		}

	- Criamos um construtor no menu projetos, para consumir o determinado serviço
		import { Component, OnInit } from '@angular/core';
import { Projeto } from '../projeto';
import { ProjetoService } from 'src/app/services/projeto.service';


@Component({
  selector: 'app-menu-projetos',
  templateUrl: './menu-projetos.component.html',
  styleUrls: ['./menu-projetos.component.css'],
   
})
export class MenuProjetosComponent implements OnInit{

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


"@angular/material/prebuilt-themes/indigo-pink.css"

- Vou criar um componente modal. 

- Criado o componente projeto
- Criado o modulo das atividades com rotas
	ng g m atividade --routing
- Criado a model da atividade
	- atividade.js
- Criado a menu-atividade
ng g c atividade/menu-atividade
- criado a shared para colocar o snackbar
	- ng g m shared
configuramos a model da atividade
	````ts		
		@NgModule({
		declarations: [
			MenuAtividadeComponent
		],
		imports: [
			CommonModule,
			AtividadeRoutingModule,
			AppModule, 
			AppRoutingModule
		]
		})
		export class AtividadeModule { }

	````
- Criamos a rota por parte do model da atividade
- Ajustamos a rota por parte da rota principal 
	````ts
		const routes: Routes = [
		{path: '', pathMatch: 'full', redirectTo: 'menu-atividades'},
		{path: 'atividades',
			loadChildren: () => import('./atividade/atividade.module').then(m =>m.AtividadeModule)}
		];
	````
- Vamos crar um componente para o carregamento da tabela. 