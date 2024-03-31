import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAtividadeComponent } from './menu-atividade/menu-atividade.component';

const routes: Routes = [
  {path: '', component: MenuAtividadeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadeRoutingModule { }
