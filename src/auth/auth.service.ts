import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientsService } from 'src/clients/clients.service';
import { CreateClientDto } from 'src/clients/dto/create-client-dto';
import * as bcrypt from 'bcrypt';
import { Client } from 'src/models/client.model';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) { }

  async login(clientDto: CreateClientDto) {
    const client = await this.validateClient(clientDto);
    return this.generateToken(client);
  }

  async registration(clientDto: CreateClientDto) {
    const candidate = await this.clientService.getClientByEmail(
      clientDto.email,
    );
    if (candidate) {
      throw new HttpException(
        'Client with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(clientDto.password, 5);
    const client = await this.clientService.createClient({
      ...clientDto,
      password: hashPassword,
    });
    return this.generateToken(client);
  }

  private async generateToken(client: Client) {
    const payload = {
      email: client.email,
      id: client.client_id,
      roles: client.roles,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateClient(clientDto: CreateClientDto) {
    const client = await this.clientService.getClientByEmail(clientDto.email);
    const passwordEqual = await bcrypt.compare(
      clientDto.password,
      client.password,
    );

    if (client && passwordEqual) {
      return client;
    }
    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }
}
