import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('events')
export class Event {
  @ObjectIdColumn() _id: ObjectID;
  @Column() userID: string;
  @Column() name: string;
  @Column() start: string;
  @Column() end: string;
  @Column() timed: string;

  constructor(event?: Partial<Event>) {
    Object.assign(this, event);
  }
}
