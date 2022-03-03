import {Component, EventEmitter, Output} from '@angular/core';
import {CatFact} from '../catFact';
import {CatFactsService} from '../cat-facts.service';
import {NotificationsService} from '../../../core/services/notifications.service';

@Component({
  selector: 'app-cat-facts-button',
  templateUrl: './cat-facts-button.component.html'
})
export class CatFactsButtonComponent {

  @Output() catFact = new EventEmitter<CatFact>();

  isLoading = false;

  constructor(private service: CatFactsService, private notifications: NotificationsService) {
  }

  emitCatFact() {
    this.isLoading = true;
    this.service.getCatFact()
      .then(catFact => this.catFact.emit(catFact))
      .catch(error => this.notifications.displayError(error))
      .finally(() => this.isLoading = false);
  }
}
