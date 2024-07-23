import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Apartament } from './apartament.model';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from './role.model';
import { ClientRoles } from './client-roles.model';

interface ClientCreationAttr {
  fullname: string;
  phone: string;
  email: string;
  password: string;
}

@Table
export class Client extends Model<Client, ClientCreationAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID', readOnly: true })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  client_id: number;

  @ApiProperty({
    example: 'Victor Petrovich Barinov',
    description: 'Name, second name and last name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullname: string;

  @ApiProperty({ example: '996558599499', description: 'User phone number' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'User email' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    type: () => [Apartament],
    description: 'All user apartaments',
  })
  @HasMany(() => Apartament)
  apartaments: Apartament[] | null;

  @ApiProperty({ example: 3, description: 'User count deal' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  countDeal: number;

  @BelongsToMany(() => Role, () => ClientRoles)
  roles: Role[];
}
