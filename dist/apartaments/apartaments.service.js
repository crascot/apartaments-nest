"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartamentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const apartament_model_1 = require("../models/apartament.model");
let ApartamentsService = class ApartamentsService {
    constructor(apartamentRepository) {
        this.apartamentRepository = apartamentRepository;
    }
    async getAllApartaments() {
        const apartaments = this.apartamentRepository.findAll();
        return apartaments;
    }
    async getOneApartament(id) {
        const apartament = this.apartamentRepository.findByPk(id);
        return apartament;
    }
    async createApartament(dto) {
        const apartament = this.apartamentRepository.create(dto);
        return apartament;
    }
    async updateApartament(apartament_id, dto) {
        const client = await this.apartamentRepository.findByPk(apartament_id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with ID ${apartament_id} not found`);
        }
        await this.apartamentRepository.update(dto, { where: { apartament_id } });
        return client;
    }
    async deleteApartament(apartament_id) {
        const client = await this.apartamentRepository.findByPk(apartament_id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with ID ${apartament_id} not found`);
        }
        await this.apartamentRepository.destroy({ where: { apartament_id } });
    }
};
exports.ApartamentsService = ApartamentsService;
exports.ApartamentsService = ApartamentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(apartament_model_1.Apartament)),
    __metadata("design:paramtypes", [Object])
], ApartamentsService);
//# sourceMappingURL=apartaments.service.js.map