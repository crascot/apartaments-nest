import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    example: 'Victor Petrovich Barinov',
    description: 'Name, second name and last name',
  })
  @IsString({ message: 'Must be string type' })
  @Length(3)
  readonly fullname: string;

  @ApiProperty({ example: '+996558599499', description: 'User phone number' })
  @IsString({ message: 'Must be string type' })
  readonly phone: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'User email' })
  @IsEmail({}, { message: 'Uncurrect email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  @IsString({ message: 'Must be string type' })
  @Length(4, 32)
  readonly password: string;
}
