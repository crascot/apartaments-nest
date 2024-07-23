import { Module } from '@nestjs/common';
import { ApartamentsController } from './apartaments.controller';
import { ApartamentsService } from './apartaments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Apartament } from 'src/models/apartament.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([Apartament]), AuthModule],
  controllers: [ApartamentsController],
  providers: [ApartamentsService],
})
export class ApartamentsModule {}
