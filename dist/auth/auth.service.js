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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const clients_service_1 = require("../clients/clients.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(clientService, jwtService) {
        this.clientService = clientService;
        this.jwtService = jwtService;
    }
    async login(clientDto) {
        const client = await this.validateClient(clientDto);
        return this.generateToken(client);
    }
    async registration(clientDto) {
        const candidate = await this.clientService.getClientByEmail(clientDto.email);
        if (candidate) {
            throw new common_1.HttpException('Client with this email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(clientDto.password, 5);
        const client = await this.clientService.createClient({
            ...clientDto,
            password: hashPassword,
        });
        return this.generateToken(client);
    }
    async generateToken(client) {
        const payload = {
            email: client.email,
            id: client.client_id,
            roles: client.roles,
        };
        return {
            token: this.jwtService.sign(payload),
        };
    }
    async validateClient(clientDto) {
        const client = await this.clientService.getClientByEmail(clientDto.email);
        const passwordEqual = await bcrypt.compare(clientDto.password, client.password);
        if (client && passwordEqual) {
            return client;
        }
        throw new common_1.UnauthorizedException({ message: 'Incorrect email or password' });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clients_service_1.ClientsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map