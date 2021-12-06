import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@app/store/app.reducer';
import { Card } from '@app/core/models/card-model/card.model';

const getAppFromState = createFeatureSelector<AppState>('state');
export const GET_CARDS = createSelector(
  getAppFromState,
  (state: AppState): Array<Card> => state?.cards
);
export const GET_CURRENT_CARD = createSelector(
  getAppFromState,
  (state: AppState): Card => state?.currentCard
);
export const GET_CART_LIST = createSelector(
  getAppFromState,
  (state: AppState): Array<Card> => state?.cart
);
export const IS_LOADING_COMPONENT = createSelector(
  getAppFromState,
  (state: AppState): boolean => state?.isLoading
);
