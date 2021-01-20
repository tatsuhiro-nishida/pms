import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('weekreports')
export class Weekreport {
  @ObjectIdColumn() _id: ObjectID;
  @Column() projectWeekId: string;
  @Column() projectStatus: number;
  @Column() projectComment: string;
  @Column() runningComment: string;

  constructor(weekreport?: Partial<Weekreport>) {
    Object.assign(this, weekreport);
  }
}
