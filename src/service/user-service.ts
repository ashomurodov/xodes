import { UserRepository } from "../repositorys/user-repo";

export class UserService extends UserRepository {
  signIn(phoneNumber: string, password: string) {
    let user = this.getUserByPhoneNumber(phoneNumber);

    if (user?.password !== password) throw new Error("Xato parol");

    return user;
  }
}
