import { ExecSyncOptionsWithBufferEncoding } from 'child_process';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('projects')
export class Project {
  @ObjectIdColumn() _id: ObjectID;
  @Column() id: string;
  @Column() name: string;
  @Column() isPick: boolean;
  @Column() manager: string;
  @Column() leader: string;
  @Column() contract: string;
  @Column() money: string;
  @Column() fire: number;
  @Column() status: number;
  @Column() office: string[];
  @Column() work: string;
  @Column() process: string[];
  @Column() member: number;
  @Column() start: string;
  @Column() end: string;
  @Column() term: string;
  @Column() memo: string;

  constructor(project?: Partial<Project>) {
    Object.assign(this, project);
  }
}
