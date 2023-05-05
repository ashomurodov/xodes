import { Card } from "../entitys/card";

export class CardRepository {
  private list: Card[] = [];
  private counterID = 0;
  isExist(card: Card): boolean {
    for (let _card of this.list) {
      if (card.cardNumber === _card.cardNumber) {
        return true;
      }
    }
    return false;
  }

  create(card: Card) {
    if (this.isExist(card)) {
      throw new Error("This card already exists");
    } else {
      card.setCardID(++this.counterID);
      this.list.push(card);
    }
  }

  getList(){
    return this.list;
  }

  getCardsByOwnerId(ownerID:number): Card[] {
    return this.list.filter(card => card.ownerID === ownerID);
  }

  transactionCard(fromCard: Card, toCard: Card, bill:number){
    if(fromCard.balance< bill) throw new Error(`${fromCard.getCardNumber()} has not enough funds`);
    fromCard.balance -= bill;
    toCard.balance += bill;
  }
}
