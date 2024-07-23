import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartament } from 'src/models/apartament.model';
import { CreateApartamentDto } from './dto/create-apartament-dto';

@Injectable()
export class ApartamentsService {
  constructor(
    @InjectModel(Apartament) private apartamentRepository: typeof Apartament,
  ) {}

  async getAllApartaments() {
    const apartaments = this.apartamentRepository.findAll();
    return apartaments;
  }

  async getOneApartament(id: number) {
    const apartament = this.apartamentRepository.findByPk(id);
    return apartament;
  }

  async createApartament(dto: CreateApartamentDto) {
    const apartament = this.apartamentRepository.create(dto);
    return apartament;
  }

  async updateApartament(apartament_id: number, dto: CreateApartamentDto) {
    const client = await this.apartamentRepository.findByPk(apartament_id);

    if (!client) {
      throw new NotFoundException(`Client with ID ${apartament_id} not found`);
    }

    await this.apartamentRepository.update(dto, { where: { apartament_id } });
    return client;
  }

  async deleteApartament(apartament_id: number) {
    const client = await this.apartamentRepository.findByPk(apartament_id);

    if (!client) {
      throw new NotFoundException(`Client with ID ${apartament_id} not found`);
    }

    await this.apartamentRepository.destroy({ where: { apartament_id } });
  }
}
