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
exports.ApartamentsController = void 0;
const common_1 = require("@nestjs/common");
const apartaments_service_1 = require("./apartaments.service");
const create_apartament_dto_1 = require("./dto/create-apartament-dto");
const swagger_1 = require("@nestjs/swagger");
const apartament_model_1 = require("../models/apartament.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth-guard");
const roles_auth_decorator_1 = require("../auth/roles.auth.decorator");
const roles_guard_1 = require("../auth/roles-guard");
const validation_pipe_1 = require("../pipes/validation.pipe");
let ApartamentsController = class ApartamentsController {
    constructor(apartamentService) {
        this.apartamentService = apartamentService;
    }
    getAllApartaments() {
        return this.apartamentService.getAllApartaments();
    }
    getApartament(apartamentId) {
        return this.apartamentService.getOneApartament(apartamentId);
    }
    createApartament(apartamentDto) {
        return this.apartamentService.createApartament(apartamentDto);
    }
    updateApartament(apartamentId, apartamentDto) {
        return this.apartamentService.updateApartament(apartamentId, apartamentDto);
    }
    deleteApartament(apartamentId) {
        return this.apartamentService.deleteApartament(apartamentId);
    }
};
exports.ApartamentsController = ApartamentsController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: [apartament_model_1.Apartament] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApartamentsController.prototype, "getAllApartaments", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: apartament_model_1.Apartament }),
    (0, common_1.Get)(':apartamentId'),
    __param(0, (0, common_1.Param)('apartamentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApartamentsController.prototype, "getApartament", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: apartament_model_1.Apartament }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apartament_dto_1.CreateApartamentDto]),
    __metadata("design:returntype", void 0)
], ApartamentsController.prototype, "createApartament", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update apartament' }),
    (0, common_1.Put)(':apartamentId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('apartamentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_apartament_dto_1.CreateApartamentDto]),
    __metadata("design:returntype", void 0)
], ApartamentsController.prototype, "updateApartament", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete apartament' }),
    (0, common_1.Delete)(':apartamentId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('apartamentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ApartamentsController.prototype, "deleteApartament", null);
exports.ApartamentsController = ApartamentsController = __decorate([
    (0, swagger_1.ApiTags)('apartaments'),
    (0, common_1.Controller)('apartaments'),
    __metadata("design:paramtypes", [apartaments_service_1.ApartamentsService])
], ApartamentsController);
//# sourceMappingURL=apartaments.controller.js.map