import { JwtService } from '@nestjs/jwt';
import { ClientsService } from 'src/clients/clients.service';
import { CreateClientDto } from 'src/clients/dto/create-client-dto';
export declare class AuthService {
    private clientService;
    private jwtService;
    constructor(clientService: ClientsService, jwtService: JwtService);
    login(clientDto: CreateClientDto): Promise<{
        token: string;
    }>;
    registration(clientDto: CreateClientDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateClient;
}
