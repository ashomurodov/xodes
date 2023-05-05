import { Card } from "../entitys/card";
import { User } from "../entitys/user";
import { CardRepository } from "../repositorys/card-repo";
import { UserRepository } from "../repositorys/user-repo";

export class MainService {
  _cardRepository = new CardRepository();
  _userRepository = new UserRepository();

  registerUser(user: User) {
    this._userRepository.create(user);
  }

  getUserList() {
    return this._userRepository.getList();
  }

  getCardList() {
    return this._cardRepository.getList();
  }

  registerCard(card: Card) {
    this._cardRepository.create(card);
  }


  getCardByPhoneNumber(phoneNumber: string) {
    const user = this._userRepository.getUserByPhoneNumber(phoneNumber);

    return this._cardRepository.getCardsByOwnerId(user!.getId());
  }

  transaction(fromCard:Card, toCard:Card, bill:number ){
    this._cardRepository.transactionCard(fromCard, toCard, bill);
  }
}
