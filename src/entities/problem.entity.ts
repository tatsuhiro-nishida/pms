import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('problems')
export class Problem {
  @ObjectIdColumn() _id: ObjectID;
  @Column() up: string;
  @Column() projectWeekId: number;
  @Column() no: string;
  @Column() level: string;
  @Column() create: number;
  @Column() problem: string;
  @Column() detail: string;
  @Column() prevStatus: number;
  @Column() status: string;
  @Column() comment: string;
  @Column() action: number;
  @Column() result: string;
  @Column() nextAction: string;
  @Column() update: number;
  @Column() expire: string;

  constructor(problem?: Partial<Problem>) {
    Object.assign(this, problem);
  }
}
