import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from './role.model';
import { Client } from './client.model';

@Table({ tableName: 'client_roles', createdAt: false, updatedAt: false })
export class ClientRoles extends Model<ClientRoles> {
  @ApiProperty({ example: 1, description: 'Unique ID', readOnly: true })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  client_roles_id: number;

  @ApiProperty({ example: 1, description: 'ID Role', readOnly: true })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  role_id: string;

  @ApiProperty({ example: 1, description: 'ID Client', readOnly: true })
  @ForeignKey(() => Client)
  @Column({ type: DataType.INTEGER })
  client_id: string;
}
