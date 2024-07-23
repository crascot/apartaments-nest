import { CreateClientDto } from 'src/clients/dto/create-client-dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(clientDto: CreateClientDto, res: any): Promise<any>;
    registration(clientDto: CreateClientDto, res: any): Promise<any>;
}
