import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as AppActions from './app.actions';
import { mergeMap } from 'rxjs/operators';
import { CardService } from '@app/core/services/card.services.ts/card.services';
import { Card } from '@app/core/models/card-model/card.model';

@Injectable()
export class AppEffects {
  //simulate backend call
  loadCards$ = createEffect((): Observable<Action | any> | ((...args: any[]) => Observable<Action>) => {
    return this.actions$.pipe(
      ofType(AppActions.LOAD_CARDS),
      mergeMap((): any => {
          const cardList = this.cardService.getCard;
          return of(AppActions.LOAD_CARDS_SUCCESS({ cardList }));
      })
    );
  });
  loadCurrentCard$ = createEffect((): Observable<Action | any> | ((...args: any[]) => Observable<Action>) => {
    return this.actions$.pipe(
      ofType(AppActions.LOAD_CURRENT_CARD),
      mergeMap((action: {id: number}): Observable<any> => {
        const cardList = this.cardService.getCard;
        const index = cardList.findIndex((card: Card): boolean => card.id === Number(action.id));
        return of(AppActions.LOAD_CURRENT_CARD_SUCCESS({ currentCard: cardList[index] }));
      })
    );
  });


  constructor(
    private actions$: Actions,
    private cardService: CardService
  ) {
  }
}
