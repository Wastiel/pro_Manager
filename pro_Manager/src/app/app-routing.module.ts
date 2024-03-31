import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAtividadeComponent } from './atividade/menu-atividade/menu-atividade.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu-atividades'},
  {path: 'atividades',
    loadChildren: () => import('./atividade/atividade.module').then(m =>m.AtividadeModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
