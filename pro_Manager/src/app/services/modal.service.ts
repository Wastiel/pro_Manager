import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px' // Largura da modal
    });
  }
}
