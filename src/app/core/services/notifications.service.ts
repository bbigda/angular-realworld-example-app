import {Injectable} from '@angular/core';
import {NotifierService} from 'angular-notifier';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private notifier: NotifierService) {
  }

  displayError(error?: HttpErrorResponse) {
    this.notifier.notify('error', 'Something went wrong. Try again in a few minutes.');
  }
}
