import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Client } from './client.model';
import { ClientRoles } from './client-roles.model';

// export enum RolesValue {
//     Admin = 'admin',
//     Buyer = 'buyer',
//     Landlord = 'landlord',
//     Seller = 'seller'
// }

interface RolesCreationAttr {
  role: string;
  description: string;
}

@Table({ tableName: 'role' })
export class Role extends Model<Role, RolesCreationAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID', readOnly: true })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'BUYER', description: 'Role' })
  @Column({ type: DataType.STRING, allowNull: false })
  role: string;

  @ApiProperty({
    example: 'this is admin role',
    description: 'Role description',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => Client, () => ClientRoles)
  client: Client[];
}
