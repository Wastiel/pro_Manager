import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtividadeRoutingModule } from './atividade-routing.module';
import { MenuAtividadeComponent } from './menu-atividade/menu-atividade.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TabelaAtividadeComponent } from './tabela-atividade/tabela-atividade.component';

@NgModule({
  declarations: [
    MenuAtividadeComponent,
    TabelaAtividadeComponent
  ],
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AtividadeModule { }
