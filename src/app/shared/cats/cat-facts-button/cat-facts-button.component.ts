import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CatFact} from '../catFact';

@Component({
  selector: 'app-cat-facts-button',
  templateUrl: './cat-facts-button.component.html'
})
export class CatFactsButtonComponent implements OnInit {

  @Output() catFact = new EventEmitter<CatFact>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // TODO : service call
  getCatFact() {
    this.catFact.emit({
      'status': {
        'verified': null,
        'sentCount': 0
      },
      '_id': '5fd56d4db3fb8b0017357189',
      'type': 'cat',
      'deleted': false,
      'user': '5fd56c8db3fb8b0017357163',
      'text': 'If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you.',
      'createdAt': '2020-12-13T01:24:29.757Z',
      'updatedAt': '2020-12-13T01:24:29.757Z',
      '__v': 0
    });
  }
}
