import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Client } from './client.model';
import { ApiProperty } from '@nestjs/swagger';

export enum ApartamentStatus {
  Purchased = 'purchased',
  Barter = 'barter',
  Reservation = 'reservation',
  Active = 'active',
}

interface ApartamentCreationAttr {
  apartament: number;
  floor: number;
  size: number;
}

@Table
export class Apartament extends Model<Apartament, ApartamentCreationAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID', readOnly: true })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  apartament_id: number;

  @ApiProperty({ example: 123, description: 'Apartament number' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  apartament: number;

  @ApiProperty({ example: 3, description: 'Apartrament floor' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  floor: number;

  @ApiProperty({ example: 23.12, description: 'Apartament size' })
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  size: number;

  @ApiProperty({
    example: ApartamentStatus.Active,
    description: 'Apartament status',
    enum: ['purchased', 'barter', 'reservation', 'active'],
    default: ApartamentStatus.Active,
  })
  @Column({
    type: DataType.ENUM,
    values: Object.values(ApartamentStatus),
    defaultValue: ApartamentStatus.Active,
    allowNull: false,
  })
  status: ApartamentStatus;

  @ApiProperty({ example: 1, description: 'Owner ID' })
  @ForeignKey(() => Client)
  @Column({
    type: DataType.INTEGER,
  })
  clientId: number | null;

  @ApiProperty({ type: () => Client, description: 'Apartament owner' })
  @BelongsTo(() => Client)
  client: Client | null;

  @ApiProperty({ example: 230000, description: 'Apartament price' })
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  price: number;
}
