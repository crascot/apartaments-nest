import { Client } from 'src/models/client.model';
import { CreateClientDto } from './dto/create-client-dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role-dto';
export declare class ClientsService {
    private clientRepository;
    private roleService;
    constructor(clientRepository: typeof Client, roleService: RolesService);
    getClient(clientId: number): Promise<Client>;
    getClientByEmail(email: string): Promise<Client>;
    createClient(dto: CreateClientDto): Promise<Client>;
    updateClient(client_id: number, dto: CreateClientDto): Promise<Client>;
    deleteClient(client_id: number): Promise<void>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
}
