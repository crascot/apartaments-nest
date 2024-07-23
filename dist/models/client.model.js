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
exports.Client = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const apartament_model_1 = require("./apartament.model");
const swagger_1 = require("@nestjs/swagger");
const role_model_1 = require("./role.model");
const client_roles_model_1 = require("./client-roles.model");
let Client = class Client extends sequelize_typescript_1.Model {
};
exports.Client = Client;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique ID', readOnly: true }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Client.prototype, "client_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Victor Petrovich Barinov',
        description: 'Name, second name and last name',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Client.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '996558599499', description: 'User phone number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Client.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@gmail.com', description: 'User email' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password', description: 'User password' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Client.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [apartament_model_1.Apartament],
        description: 'All user apartaments',
    }),
    (0, sequelize_typescript_1.HasMany)(() => apartament_model_1.Apartament),
    __metadata("design:type", Array)
], Client.prototype, "apartaments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'User count deal' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Client.prototype, "countDeal", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => role_model_1.Role, () => client_roles_model_1.ClientRoles),
    __metadata("design:type", Array)
], Client.prototype, "roles", void 0);
exports.Client = Client = __decorate([
    sequelize_typescript_1.Table
], Client);
//# sourceMappingURL=client.model.js.map