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
exports.CreateClientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateClientDto {
}
exports.CreateClientDto = CreateClientDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Victor Petrovich Barinov',
        description: 'Name, second name and last name',
    }),
    (0, class_validator_1.IsString)({ message: 'Must be string type' }),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateClientDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+996558599499', description: 'User phone number' }),
    (0, class_validator_1.IsString)({ message: 'Must be string type' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@gmail.com', description: 'User email' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Uncurrect email' }),
    __metadata("design:type", String)
], CreateClientDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password', description: 'User password' }),
    (0, class_validator_1.IsString)({ message: 'Must be string type' }),
    (0, class_validator_1.Length)(4, 32),
    __metadata("design:type", String)
], CreateClientDto.prototype, "password", void 0);
//# sourceMappingURL=create-client-dto.js.map