export class Bill {
  constructor(
    public deliverer: string,
    public owner: string,
    public value: number,
    public percent: number,
    public date: string,
    public status: string,
    public id?: number
  ) {}
}
