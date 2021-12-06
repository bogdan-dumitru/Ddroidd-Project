import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '@app/store/app.state';
import { ADD_TO_CART, LOAD_CURRENT_CARD } from '@app/store/app.actions';
import { Card, CardModel } from '@app/core/models/card-model/card.model';
import { GET_CART_LIST, GET_CURRENT_CARD } from '@app/store/app.selectors';

@Component({
  selector: 'app-card-details',
  templateUrl: 'card-details.component.html',
  styleUrls: ['card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  currentCardId = 0;
  currentCard: Card = new Card();
  cartList: Array<CardModel> = [];
  buttonClicked = false;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.checkRouteParams();
    this.getCartList();
    this.getCurrentCard();
  }

  addToCardClicked(): void {
    this.buttonClicked = true;
    this.store.dispatch(ADD_TO_CART({ card: this.currentCard }));
  }

  private checkRouteParams(): void {
    this.route.params.subscribe((params: Params): void => {
      this.currentCardId = params.id;
    });
  }

  private getCartList(): void {
    this.store.select(GET_CART_LIST).subscribe((cartList: Array<Card>): void => {
      if (cartList.length === 0) {
        return;
      }
      this.cartList = [...cartList ];
    });
  }

  private getCurrentCard(): void {
    this.store.select(GET_CURRENT_CARD).subscribe((currentCard: Card): void => {
      if (currentCard.id === 0) {
        this.store.dispatch(LOAD_CURRENT_CARD({ id: this.currentCardId }));
        return;
      }
      this.currentCard = {...currentCard};
      const index = this.cartList.findIndex((card: Card): boolean => card.id === Number(this.currentCard.id));
      if (index >= 0 ) {
        this.buttonClicked = true;
      }
    });
  }
}
