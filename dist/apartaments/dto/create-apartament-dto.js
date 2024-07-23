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
exports.CreateApartamentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateApartamentDto {
}
exports.CreateApartamentDto = CreateApartamentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123, description: 'Apartament number' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Length)(1),
    __metadata("design:type", Number)
], CreateApartamentDto.prototype, "apartament", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Apartrament floor' }),
    (0, class_validator_1.Length)(1),
    __metadata("design:type", Number)
], CreateApartamentDto.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 23.12, description: 'Apartament size' }),
    (0, class_validator_1.Length)(2, 4),
    __metadata("design:type", Number)
], CreateApartamentDto.prototype, "size", void 0);
//# sourceMappingURL=create-apartament-dto.js.map