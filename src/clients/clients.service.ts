import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from 'src/models/client.model';
import { CreateClientDto } from './dto/create-client-dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role-dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client) private clientRepository: typeof Client,
    private roleService: RolesService,
  ) { }

  async getClient(clientId: number) {
    const client = await this.clientRepository.findByPk(clientId, {
      include: { all: true },
    });
    return client;
  }

  async getClientByEmail(email: string) {
    const client = await this.clientRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return client;
  }

  async createClient(dto: CreateClientDto) {
    const client = await this.clientRepository.create(dto);
    const role = await this.roleService.getRoleByRole('BUYER');
    await client.$set('roles', [role.id]);
    client.roles = [role];
    return client;
  }

  async updateClient(client_id: number, dto: CreateClientDto) {
    const client = await this.clientRepository.findByPk(client_id);

    if (!client) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }

    await this.clientRepository.update(dto, { where: { client_id } });
    return client;
  }

  async deleteClient(client_id: number) {
    const client = await this.clientRepository.findByPk(client_id);

    if (!client) {
      throw new NotFoundException(`Client with ID ${client_id} not found`);
    }

    await this.clientRepository.destroy({ where: { client_id } });
  }

  async addRole(dto: AddRoleDto) {
    const client = await this.clientRepository.findByPk(dto.client_id);
    const role = await this.roleService.getRoleByRole(dto.role);

    if (client && role) {
      await client.$add('role', role.id);
      return dto;
    }

    throw new HttpException('Client or role not defined', HttpStatus.NOT_FOUND);
  }
}
