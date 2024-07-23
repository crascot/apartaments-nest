import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client-dto';
import { AddRoleDto } from './dto/add-role-dto';
export declare class ClientsController {
    private clientService;
    constructor(clientService: ClientsService);
    getClient(clientId: number): Promise<import("../models/client.model").Client>;
    updateClient(clientId: number, clientDto: CreateClientDto): Promise<import("../models/client.model").Client>;
    deleteClient(clientId: number): Promise<void>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
}
