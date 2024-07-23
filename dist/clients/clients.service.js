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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const client_model_1 = require("../models/client.model");
const roles_service_1 = require("../roles/roles.service");
let ClientsService = class ClientsService {
    constructor(clientRepository, roleService) {
        this.clientRepository = clientRepository;
        this.roleService = roleService;
    }
    async getClient(clientId) {
        const client = await this.clientRepository.findByPk(clientId, {
            include: { all: true },
        });
        return client;
    }
    async getClientByEmail(email) {
        const client = await this.clientRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return client;
    }
    async createClient(dto) {
        const client = await this.clientRepository.create(dto);
        const role = await this.roleService.getRoleByRole('BUYER');
        await client.$set('roles', [role.id]);
        client.roles = [role];
        return client;
    }
    async updateClient(client_id, dto) {
        const client = await this.clientRepository.findByPk(client_id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with ID ${client_id} not found`);
        }
        await this.clientRepository.update(dto, { where: { client_id } });
        return client;
    }
    async deleteClient(client_id) {
        const client = await this.clientRepository.findByPk(client_id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with ID ${client_id} not found`);
        }
        await this.clientRepository.destroy({ where: { client_id } });
    }
    async addRole(dto) {
        const client = await this.clientRepository.findByPk(dto.client_id);
        const role = await this.roleService.getRoleByRole(dto.role);
        if (client && role) {
            await client.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('Client or role not defined', common_1.HttpStatus.NOT_FOUND);
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(client_model_1.Client)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map