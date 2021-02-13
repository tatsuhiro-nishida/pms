import { ExecSyncOptionsWithBufferEncoding } from 'child_process';
import StatusHistoryInfo from 'src/models/StatusHistoryInfo';
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
  @Column() org: string;
  @Column() ownerUserId: string;
  @Column() contactUserName: string;
  @Column() contactMailAddress: string;
  @Column() contactTelephoneNo: string;
  @Column() updateDate: string;
  @Column() canEdit: boolean;
  @Column() histories: StatusHistoryInfo[];

  constructor(help?: Partial<Help>) {
    Object.assign(this, help);
  }
}
