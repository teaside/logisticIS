export class User {
  constructor(
    public email: string,
    public password: string,
    public name: string,
    public tel: string,
    public type: string,
    public id?: string
  ) {}
}
