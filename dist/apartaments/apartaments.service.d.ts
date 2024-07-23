import { Apartament } from 'src/models/apartament.model';
import { CreateApartamentDto } from './dto/create-apartament-dto';
export declare class ApartamentsService {
    private apartamentRepository;
    constructor(apartamentRepository: typeof Apartament);
    getAllApartaments(): Promise<Apartament[]>;
    getOneApartament(id: number): Promise<Apartament>;
    createApartament(dto: CreateApartamentDto): Promise<Apartament>;
    updateApartament(apartament_id: number, dto: CreateApartamentDto): Promise<Apartament>;
    deleteApartament(apartament_id: number): Promise<void>;
}
