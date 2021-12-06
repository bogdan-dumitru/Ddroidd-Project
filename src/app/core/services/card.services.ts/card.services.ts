import { Injectable } from '@angular/core';
import { Card } from '@app/core/models/card-model/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  constructor() {
  }

  get getCard(): Array<Card> {
    return [
      new Card({
        id: 1,
        title: 'Title111111111111111111111111111111111111111111',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 11
      }),
      new Card({
        id: 2,
        title: 'Title2',
        description: 'Very very very very very very very very very very very very very very very very very very very long description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 12
      }),
      new Card({
        id: 3,
        title: 'Title3',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 13
      }),
      new Card({
        id: 4,
        title: 'Title4',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 14
      }),
      new Card({
        id: 5,
        title: 'Title5',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 15
      }),
      new Card({
        id: 6,
        title: 'Title6',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 16
      }),
      new Card({
        id: 7,
        title: 'Title7',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 17
      }),
      new Card({
        id: 8,
        title: 'Title8',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 18
      }),
      new Card({
        id: 9,
        title: 'Title9',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 19
      }),
      new Card({
        id: 10,
        title: 'Title10',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 20
      }),
      new Card({
        id: 11,
        title: 'Title11',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 21
      }),
      new Card({
        id: 12,
        title: 'Title12',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 22
      }),
      new Card({
        id: 13,
        title: 'Title13',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 23
      }),
      new Card({
        id: 14,
        title: 'Title14',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 24
      }),
      new Card({
        id: 15,
        title: 'Title15',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 25
      }),
      new Card({
        id: 16,
        title: 'Title16',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 26
      }),
      new Card({
        id: 17,
        title: 'Title17',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 27
      }),
      new Card({
        id: 18,
        title: 'Title18',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 28
      }),
      new Card({
        id: 19,
        title: 'Title19',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 29
      }),
      new Card({
        id: 20,
        title: 'Title20',
        description: 'Description',
        imageUrl: './../../../../assets/images/card-image.JPG',
        price: 30
      }),
    ];
  }
}
