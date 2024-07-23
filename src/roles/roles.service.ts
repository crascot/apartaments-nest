import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role-dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async getRoleByRole(role: string) {
    const roleClient = await this.roleRepository.findOne({ where: { role } });
    return roleClient;
  }

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }
}
