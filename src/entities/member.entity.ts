import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('members')
export class Member {
  @ObjectIdColumn() _id: ObjectID;
  @Column() userID: string;
  @Column() name: string;
  @Column() color: string;
  @Column() prevjikangai: number;
  @Column() jikangai: number;
  @Column() kyuujitu: number;
  @Column() projectStatus: number;
  @Column() prevhealth: number;
  @Column() health: number;
  @Column() comment: string;

  constructor(member?: Partial<Member>) {
    Object.assign(this, member);
  }
}
