import { Model } from 'sequelize-typescript';
import { Client } from './client.model';
interface RolesCreationAttr {
    role: string;
    description: string;
}
export declare class Role extends Model<Role, RolesCreationAttr> {
    id: number;
    role: string;
    description: string;
    client: Client[];
}
export {};
