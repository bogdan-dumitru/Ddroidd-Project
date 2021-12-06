import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as AppActions from './app.actions';
import { SET_LOADING_COMPONENT } from './app.actions';
import { mergeMap } from 'rxjs/operators';
import { CardService } from '@app/core/services/card.services.ts/card.services';
import { Card } from '@app/core/models/card-model/card.model';
import { State } from '@app/store/app.state';

@Injectable()
export class AppEffects {
  //simulate backend call
  loadCards$ = createEffect((): Observable<Action | any> | ((...args: any[]) => Observable<Action>) => {
    return this.actions$.pipe(
      ofType(AppActions.LOAD_CARDS),
      mergeMap((): any => {
        const cardList = this.cardService.getCard;
        setTimeout((): void => {
          this.store.dispatch(SET_LOADING_COMPONENT({ isLoading: false }));
        }, 3000);
        return of(AppActions.LOAD_CARDS_SUCCESS({ cardList }));
      })
    );
  });
  loadCurrentCard$ = createEffect((): Observable<Action | any> | ((...args: any[]) => Observable<Action>) => {
    return this.actions$.pipe(
      ofType(AppActions.LOAD_CURRENT_CARD),
      mergeMap((action: { id: number }): Observable<any> => {
        const cardList = this.cardService.getCard;
        const index = cardList.findIndex((card: Card): boolean => card.id === Number(action.id));
        return of(AppActions.LOAD_CURRENT_CARD_SUCCESS({ currentCard: cardList[index] }));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private cardService: CardService
  ) {
  }
}
