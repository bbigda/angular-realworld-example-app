import {Component, EventEmitter, Output} from '@angular/core';
import {CatFact} from '../catFact';
import {CatFactsService} from '../cat-facts.service';

@Component({
  selector: 'app-cat-facts-button',
  templateUrl: './cat-facts-button.component.html'
})
export class CatFactsButtonComponent {

  @Output() catFact = new EventEmitter<CatFact>();

  isLoading = false;

  constructor(private service: CatFactsService) {
  }

  emitCatFact() {
    this.isLoading = true;
    this.service.getCatFact()
      .then(catFact => this.catFact.emit(catFact))
      .catch(error => console.warn('notifications unimplemented'))
      .finally(() => this.isLoading = false);
  }
}
