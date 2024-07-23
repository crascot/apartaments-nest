import { CreateRoleDto } from './dto/create-role-dto';
import { Role } from 'src/models/role.model';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    getRoleByRole(role: string): Promise<Role>;
    createRole(dto: CreateRoleDto): Promise<Role>;
}
