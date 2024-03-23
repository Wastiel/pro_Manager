import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  nomeProjeto: string = '';

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  adicionarProjeto(): void {
    // Aqui você pode adicionar a lógica para adicionar o projeto com o nome inserido
    console.log('Nome do projeto:', this.nomeProjeto);
    // Fecha a modal
    this.dialogRef.close();
  }
}

