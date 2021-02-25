import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

export default class StatusHistoryInfo {
  @Column() date: Date;
  @Column() userName: string;
  @Column() action: string;
}
