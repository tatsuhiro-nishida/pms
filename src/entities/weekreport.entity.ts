import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('weekreports')
export class Weekreport {
  @ObjectIdColumn() _id: ObjectID;
  @Column() project_week_ID: string;
  @Column() projectStatus: number;
  @Column() projectComment: string;
  @Column() runningComment: string;

  constructor(weekreport?: Partial<Weekreport>) {
    Object.assign(this, weekreport);
  }
}
