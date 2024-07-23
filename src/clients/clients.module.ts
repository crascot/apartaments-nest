import { Module, forwardRef } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from 'src/models/client.model';
import { Role } from 'src/models/role.model';
import { ClientRoles } from 'src/models/client-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Client, Role, ClientRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
