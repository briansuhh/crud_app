export class User {
  userID!: number;
  firstName!: string;
  lastName!: string;
  phoneNum!: string;
  email!: string;
  address!: string;
  role!: string;
  responsibility!: string;

  constructor() {
    this.email = '@gmail.com';
  }
}
