import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('problems')
export class Problem {
  @ObjectIdColumn() _id: ObjectID;
  @Column() projectWeekId: string;
  @Column() projectStatus: number;
  @Column() projectComment: string;
  @Column() runningComment: string;

  constructor(problem?: Partial<Problem>) {
    Object.assign(this, problem);
  }
}
