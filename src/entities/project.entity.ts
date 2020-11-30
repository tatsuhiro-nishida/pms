import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('project')
export class Project {
  @ObjectIdColumn() id: ObjectID;
  @Column() name: string;

  constructor(project?: Partial<Project>) {
    Object.assign(this, project);
  }
}