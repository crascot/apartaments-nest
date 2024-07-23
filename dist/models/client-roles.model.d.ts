import { Model } from 'sequelize-typescript';
export declare class ClientRoles extends Model<ClientRoles> {
    client_roles_id: number;
    role_id: string;
    client_id: string;
}
