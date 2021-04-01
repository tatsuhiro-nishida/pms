import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('orders')
export class Order {
  @ObjectIdColumn() _id: ObjectID;
  @Column() projectWeekId: string;
  @Column() orderID: number;
  @Column() order: JSON;
  @Column() coding: JSON;
  @Column() unittest: JSON;
  @Column() require: JSON;

  constructor(order?: Partial<Order>) {
    Object.assign(this, order);
  }
}
