import { Card } from "./card";

export class User {
  private userID!: number;
  constructor(public firstName: string, public lastName: string, public phoneNumber: string, private password: string, public age: number) {}

  setId(value: number) {
    this.userID = value;
  }

  getId(): number {
    return this.userID;
  }

  setFullName(value: string, password: string) {
    if (password == this.password) {
      const [firstName, lastName] = value.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    } else {
      console.log("Invalid password");
    }
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
