import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'SELLER', description: 'Gived role for client' })
  @IsString({ message: 'Uncurrect role' })
  readonly role: string;

  @ApiProperty({ example: 5, description: 'Client ID' })
  @IsNumber()
  readonly client_id: number;
}
