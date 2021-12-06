import { Component, OnInit } from '@angular/core';
import { CardService } from '@app/core/services/card.services.ts/card.services';
import { Card, CardModel } from '@app/core/models/card-model/card.model';
import { Store } from '@ngrx/store';
import { State } from '@app/store/app.state';
import { LOAD_CARDS, SET_LOADING_COMPONENT } from '@app/store/app.actions';
import { GET_CARDS, IS_LOADING_COMPONENT } from '@app/store/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoadingComponent$: Observable<boolean> = new Observable<boolean>();
  homeCards: Array<CardModel> = [];

  constructor(
    private cardService: CardService,
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
    this.isLoadingComponent$ = this.store.select(IS_LOADING_COMPONENT);
    this.getCards();
  }

  getCards(): void {
    this.store.select(GET_CARDS).subscribe((cardList: Array<Card>): void => {
      if (cardList.length === 0) {
        this.store.dispatch(SET_LOADING_COMPONENT({isLoading: true}));
        this.store.dispatch(LOAD_CARDS());
        return;
      }
      this.homeCards = cardList;
    });
  }
}
