import { Order } from './order.model';

export class Record {
  constructor(
    public creator: string,
    public from: string,
    public to: string,
    public sizes: string,
    public weight: string,
    public date: string,
    public deliverer: string,
    public sum: string,
    public status: string,
    public respondedDeliverers: Order[],
    public id?: number
  ) {}
}
