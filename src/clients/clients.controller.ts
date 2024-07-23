import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client-dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { Roles } from 'src/auth/roles.auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { AddRoleDto } from './dto/add-role-dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @ApiOperation({ summary: 'Get client by id' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get(':clientId')
  getClient(@Param('clientId') clientId: number) {
    return this.clientService.getClient(clientId);
  }

  @ApiOperation({ summary: 'Update client' })
  @UseGuards(JwtAuthGuard)
  @Put(':clientId')
  updateClient(
    @Param('clientId') clientId: number,
    @Body() clientDto: CreateClientDto,
  ) {
    return this.clientService.updateClient(clientId, clientDto);
  }

  @ApiOperation({ summary: 'Delete client' })
  @UseGuards(JwtAuthGuard)
  @Delete(':clientId')
  deleteClient(@Param('clientId') clientId: number) {
    return this.clientService.deleteClient(clientId);
  }

  @ApiOperation({ summary: 'Issuing roles' })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.clientService.addRole(dto);
  }
}
