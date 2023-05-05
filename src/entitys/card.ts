export type CARD_TYPE = "UZCARD" | "HUMO";
export class Card {
  private id!: number;
  constructor(public cardNumber: string, public pin: number, public cardType: CARD_TYPE, public expiryDate: string, public balance: number, public ownerID: number) {}

  getCardNumber(): string {
    return this.cardNumber;
  }

  getOwnerID(): number {
    return this.ownerID;
  }

  getCardID() {
    return this.id;
  }

  setCardID(newID: number) {
    this.id = newID;
  }

  setOwnerID(newOwnerID: number) {
    this.ownerID = newOwnerID;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(deposite: number) {
    this.balance += deposite;
  }
}
