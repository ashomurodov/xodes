export type CARD_TYPE = "UZCARD" | "HUMO";
export class Card {
  constructor(public cardNumber: string, public cardType: CARD_TYPE, public expiryDate: string, public balance: number, public ownerID: number) {}

  
}
