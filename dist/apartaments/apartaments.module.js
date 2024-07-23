"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartamentsModule = void 0;
const common_1 = require("@nestjs/common");
const apartaments_controller_1 = require("./apartaments.controller");
const apartaments_service_1 = require("./apartaments.service");
const sequelize_1 = require("@nestjs/sequelize");
const apartament_model_1 = require("../models/apartament.model");
const auth_module_1 = require("../auth/auth.module");
let ApartamentsModule = class ApartamentsModule {
};
exports.ApartamentsModule = ApartamentsModule;
exports.ApartamentsModule = ApartamentsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([apartament_model_1.Apartament]), auth_module_1.AuthModule],
        controllers: [apartaments_controller_1.ApartamentsController],
        providers: [apartaments_service_1.ApartamentsService],
    })
], ApartamentsModule);
//# sourceMappingURL=apartaments.module.js.map