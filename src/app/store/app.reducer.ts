import { Card } from '@app/core/models/card-model/card.model';
import { createReducer, on } from '@ngrx/store';
import { ADD_TO_CART, LOAD_CARDS_SUCCESS, LOAD_CURRENT_CARD_SUCCESS, SET_CURRENT_CARD, SET_LOADING_COMPONENT } from './app.actions';

export interface AppState {
  cards: Array<Card>;
  currentCard: Card;
  cart: Array<Card>;
  isLoading: boolean;
};

const initialState: AppState = {
  cards: [],
  currentCard: new Card(),
  cart: [],
  isLoading: false
};

export const APP_REDUCER = createReducer<AppState>(
  initialState,
  on(LOAD_CARDS_SUCCESS, (state: AppState, action: { cardList: Array<Card> }): AppState => ({
    ...state,
    cards: action.cardList
  })),
  on(LOAD_CURRENT_CARD_SUCCESS, (state: AppState, action: { currentCard: Card }): AppState => ({
    ...state,
    currentCard: action.currentCard
  })),
  on(SET_CURRENT_CARD, (state: AppState, action: { currentCard: Card }): AppState => ({
    ...state,
    currentCard: action.currentCard
  })),
  on(ADD_TO_CART, (state: AppState, action: { card: Card }): AppState => {
    let cartList = [];
    if (state.cart.length > 0) {
      cartList = [...state.cart];
      cartList.push(action.card);
    } else {
      cartList.push(action.card);
    }
    return {
      ...state,
      cart: cartList
    };
  }),
  on(SET_LOADING_COMPONENT, (state: AppState, action: { isLoading: boolean }): AppState => ({
    ...state,
    isLoading: action.isLoading
  }))
);


