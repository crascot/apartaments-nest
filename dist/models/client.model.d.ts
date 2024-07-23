import { Model } from 'sequelize-typescript';
import { Apartament } from './apartament.model';
import { Role } from './role.model';
interface ClientCreationAttr {
    fullname: string;
    phone: string;
    email: string;
    password: string;
}
export declare class Client extends Model<Client, ClientCreationAttr> {
    client_id: number;
    fullname: string;
    phone: string;
    email: string;
    password: string;
    apartaments: Apartament[] | null;
    countDeal: number;
    roles: Role[];
}
export {};
