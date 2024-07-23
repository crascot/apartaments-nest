import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from './models/client.model';
import { Apartament } from './models/apartament.model';
import { ApartamentsModule } from './apartaments/apartaments.module';
import { ClientsModule } from './clients/clients.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './models/role.model';
import { ClientRoles } from './models/client-roles.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Client, Apartament, Role, ClientRoles],
      autoLoadModels: true,
    }),
    ClientsModule,
    ApartamentsModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule { }
