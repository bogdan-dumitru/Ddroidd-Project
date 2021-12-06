export interface CardModel {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export class Card implements CardModel {
  id = 0;
  title = '';
  description = '';
  imageUrl = '';
  price = 0;

  constructor(cardDto?: CardModel) {
    if (!cardDto) {
      return;
    }
    this.id = cardDto.id;
    this.title = cardDto.title;
    this.description = cardDto.description;
    this.imageUrl = cardDto.imageUrl;
    this.price = cardDto.price;
  }
}
