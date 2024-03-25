import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  message: string = '';
  private subscription!: Subscription;

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.subscription = this.snackbarService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeSnackbar(): void {
    this.message = '';
  }

}
