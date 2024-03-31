import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjetoService } from 'src/app/services/projeto.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-modal-projeto',
  templateUrl: './modal-projeto.component.html',
  styleUrls: ['./modal-projeto.component.scss']
})
export class ModalProjetoComponent {

  @ViewChild('modalContent') modalContent!: TemplateRef<any>;

  // Declare o EventEmitter
  @Output() projetoAdicionado = new EventEmitter<void>();
  form: FormGroup;
  errorMessage: any;
  @Output() modalClosed = new EventEmitter<void>(); // EventEmitter para emitir o evento de fechamento do modal

  constructor(public dialogRef: MatDialogRef<ModalProjetoComponent>, private fb: FormBuilder, private _projetoService: ProjetoService, private snackbarService: SnackbarService)
  {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      descricao: ['']
    });
  }

  adicionarProjeto(): void {
    if (this.form.valid) {
      const novoProjeto = this.form.value;
      this._projetoService.setProjeto(novoProjeto).subscribe(
        (resposta) => {
          console.log('Projeto adicionado com sucesso:', resposta);
          this.fecharModal();
          this.showMessage('Projeto adicionado com sucesso!');
        },
        (erro) => {
          console.error('Erro ao adicionar projeto:', erro);
          this.showMessage('Erro ao adicionar projeto. Por favor, tente novamente.');
        }
      );
    }
  }

  fecharModal(): void {
    this.dialogRef.close();
    // Emitir o evento de fechamento do modal
    this.modalClosed.emit();
  }

  showMessage(message: string): void {
    this.snackbarService.openSnackbar(message);
  }

  updateErrorMessage() {
    if (this.form.get('nome')?.hasError('required')) {
      this.errorMessage = 'Você deve entrar com um valor válido';
    } else if (this.form.get('nome')?.hasError('maxlength')) {
      this.errorMessage = 'Novo Projeto deve conter no máximo 10 caracteres';
    } else if (this.form.get('nome')?.hasError('minlength')) {
      this.errorMessage = 'Novo Projeto deve conter no mínimo 3 caracteres';
    } else {
      this.errorMessage = '';
    }
  }
}
