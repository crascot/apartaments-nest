import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Length } from 'class-validator';

export class CreateApartamentDto {
  @ApiProperty({ example: 123, description: 'Apartament number' })
  @IsNumber()
  @Length(1)
  readonly apartament: number;

  @ApiProperty({ example: 3, description: 'Apartrament floor' })
  @Length(1)
  readonly floor: number;

  @ApiProperty({ example: 23.12, description: 'Apartament size' })
  @Length(2, 4)
  readonly size: number;
}
