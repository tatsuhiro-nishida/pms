import { ExecSyncOptionsWithBufferEncoding } from 'child_process';
import StatusHistoryInfo from 'src/models/StatusHistoryInfo';
import UserInfo from 'src/models/UserInfo';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('helps')
export class Help {
  @ObjectIdColumn() id: ObjectID;
  @Column() helpId: string;
  @Column() type: string;
  @Column() possibility: number;
  @Column() emergency: number;
  @Column() title: string;
  @Column() detail: string;
  @Column() skills: string[];
  @Column() locations: string[];
  @Column() status: string;
  @Column() termStart: string;
  @Column() termEnd: string;
  @Column() owner: UserInfo;
  @Column() updateDate: Date;
  @Column() histories: StatusHistoryInfo[];
  @Column() negotiators: UserInfo[];

  constructor(help?: Partial<Help>) {
    Object.assign(this, help);
  }
}
