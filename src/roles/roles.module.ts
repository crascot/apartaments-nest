import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';
import { Client } from 'src/models/client.model';
import { ClientRoles } from 'src/models/client-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, Client, ClientRoles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
