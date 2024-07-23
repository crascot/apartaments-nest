import { Model } from 'sequelize-typescript';
import { Client } from './client.model';
export declare enum ApartamentStatus {
    Purchased = "purchased",
    Barter = "barter",
    Reservation = "reservation",
    Active = "active"
}
interface ApartamentCreationAttr {
    apartament: number;
    floor: number;
    size: number;
}
export declare class Apartament extends Model<Apartament, ApartamentCreationAttr> {
    apartament_id: number;
    apartament: number;
    floor: number;
    size: number;
    status: ApartamentStatus;
    clientId: number | null;
    client: Client | null;
    price: number;
}
export {};
