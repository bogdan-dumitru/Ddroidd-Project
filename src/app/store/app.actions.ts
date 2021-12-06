import { createAction, props } from '@ngrx/store';
import { Card } from '@app/core/models/card-model/card.model';

// eslint-disable-next-line no-shadow
export const enum AppActionTypes {
  loadCards = '[App] Load Cards',
  loadCurrentCard = '[App] Load Current Card',
  loadCardsSuccess = '[App] Load Cards Success',
  loadCurrentCardSuccess = '[App] Loat Current Card Success',
  addToCart = '[App] Add to Cart',
  setCurrentCard = '[App] Set Current Card',
  setLoadingComponent = '[App] Set Loading Component'
}

export const LOAD_CARDS = createAction(
  AppActionTypes.loadCards
);

export const LOAD_CURRENT_CARD = createAction(
  AppActionTypes.loadCurrentCard,
  props < { id: number }>()
);

export const LOAD_CARDS_SUCCESS = createAction(
  AppActionTypes.loadCardsSuccess,
  props<{ cardList: Array<Card> }>()
);

export const LOAD_CURRENT_CARD_SUCCESS = createAction(
  AppActionTypes.loadCurrentCardSuccess,
  props<{ currentCard: Card }>()
);

export const SET_CURRENT_CARD = createAction(
  AppActionTypes.setCurrentCard,
  props<{ currentCard: Card }>()
);

export const ADD_TO_CART = createAction(
  AppActionTypes.addToCart,
  props<{ card: Card }>()
);

export const SET_LOADING_COMPONENT = createAction(
  AppActionTypes.setLoadingComponent,
  props<{ isLoading: boolean }>()
);
