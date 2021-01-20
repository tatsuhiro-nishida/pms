import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('comments')
export class Comment {
  @ObjectIdColumn() _id: ObjectID;
  @Column() projectWeekId: string;
  @Column() date: string;
  @Column() time: string;
  @Column() name: string;
  @Column() avator: string;
  @Column() color: string;
  @Column() comment: string;

  constructor(comment?: Partial<Comment>) {
    Object.assign(this, comment);
  }
}
