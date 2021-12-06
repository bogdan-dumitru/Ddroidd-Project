import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@app/store/app.state';
import { Card } from '@app/core/models/card-model/card.model';
import { GET_CART_LIST } from '@app/store/app.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartList: Array<Card> = [];

  constructor(
    private store: Store<State>) {
  }

  ngOnInit() {
    this.getCartList();
  }

  private getCartList(): void {
    this.store.select(GET_CART_LIST).subscribe((cartList: Array<Card>): void => {
      if (cartList.length === 0) {
        return;
      }
      this.cartList = [...cartList ];
    });
  }
}
