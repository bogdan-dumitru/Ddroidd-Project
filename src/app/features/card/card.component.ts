import { Component, Input } from '@angular/core';
import { Card } from '@app/core/models/card-model/card.model';
import { Router } from '@angular/router';
import { SET_CURRENT_CARD } from '@app/store/app.actions';
import { Store } from '@ngrx/store';
import { State } from '@app/store/app.state';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent {
  @Input() cardDetails: Card = new Card();

  constructor(
    private store: Store<State>,
    private router: Router) {
  }

  navigateToDetials(id: number): void {
    this.store.dispatch(SET_CURRENT_CARD({ currentCard: this.cardDetails }));
    this.router.navigate(['/card-details', id]).then();
  }
}
