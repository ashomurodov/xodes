import { User } from "../entitys/user";

export class UserRepository {
  private list: User[] = [];
  private counterID = 0;
  isExist(user: User): boolean {
    for (let _card of this.list) {
      if (user.phoneNumber === _card.phoneNumber) {
        return true;
      }
    }
    return false;
  }

  create(user: User) {
    if (this.isExist(user)) {
      throw new Error("This user already exists");
    } else {
      user.setId(++this.counterID);
      this.list.push(user);
    }
  }

  getList() {
    return this.list;
  }

  getUserByPhoneNumber(phoneNumber: string) {
    for (let user of this.list) {
      if (user.phoneNumber === phoneNumber) {
        return user;
      }
    }
  }



}
