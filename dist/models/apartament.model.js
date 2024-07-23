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
exports.Apartament = exports.ApartamentStatus = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const client_model_1 = require("./client.model");
const swagger_1 = require("@nestjs/swagger");
var ApartamentStatus;
(function (ApartamentStatus) {
    ApartamentStatus["Purchased"] = "purchased";
    ApartamentStatus["Barter"] = "barter";
    ApartamentStatus["Reservation"] = "reservation";
    ApartamentStatus["Active"] = "active";
})(ApartamentStatus || (exports.ApartamentStatus = ApartamentStatus = {}));
let Apartament = class Apartament extends sequelize_typescript_1.Model {
};
exports.Apartament = Apartament;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique ID', readOnly: true }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Apartament.prototype, "apartament_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123, description: 'Apartament number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Apartament.prototype, "apartament", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Apartrament floor' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Apartament.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 23.12, description: 'Apartament size' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Apartament.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ApartamentStatus.Active,
        description: 'Apartament status',
        enum: ['purchased', 'barter', 'reservation', 'active'],
        default: ApartamentStatus.Active,
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(ApartamentStatus),
        defaultValue: ApartamentStatus.Active,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Apartament.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Owner ID' }),
    (0, sequelize_typescript_1.ForeignKey)(() => client_model_1.Client),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Apartament.prototype, "clientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => client_model_1.Client, description: 'Apartament owner' }),
    (0, sequelize_typescript_1.BelongsTo)(() => client_model_1.Client),
    __metadata("design:type", client_model_1.Client)
], Apartament.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 230000, description: 'Apartament price' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Apartament.prototype, "price", void 0);
exports.Apartament = Apartament = __decorate([
    sequelize_typescript_1.Table
], Apartament);
//# sourceMappingURL=apartament.model.js.map