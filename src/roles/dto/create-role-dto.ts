import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Client role' })
  @IsString({ message: 'Uncurrect role' })
  readonly role: string;

  @ApiProperty({ example: 'Administrator', description: 'Role description' })
  @IsString()
  readonly description: string;
}
