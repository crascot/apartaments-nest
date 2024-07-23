import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role-dto';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    getByRole(role: string): Promise<import("../models/role.model").Role>;
    create(dto: CreateRoleDto): Promise<import("../models/role.model").Role>;
}
