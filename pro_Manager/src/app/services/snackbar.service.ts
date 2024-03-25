import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private snackbarRef: MatSnackBarRef<any> | null = null;
  private messageSubject = new Subject<string>();

  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(message: string): void {
    this.snackbarRef = this.snackBar.open(message, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}
