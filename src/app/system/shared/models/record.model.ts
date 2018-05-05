export class Record {
  constructor(
    public creator: string,
    public from: string,
    public to: string,
    public sizes: string,
    public weight: string,
    public date: string,
    public status: string,
    public respondedDeliverers: {
      deliverer: string,
      dateOfDeliver: string,
      value: number
    }
  ) {}
}
