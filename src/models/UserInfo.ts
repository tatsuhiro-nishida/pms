import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

export default class UserInfo {
  @Column() userId: string;
  @Column() userName: string;
  @Column() mailAddress: string;
  @Column() telephoneNo: string;
  @Column() org: string;
}
