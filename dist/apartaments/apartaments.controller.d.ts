import { ApartamentsService } from './apartaments.service';
import { CreateApartamentDto } from './dto/create-apartament-dto';
import { Apartament } from 'src/models/apartament.model';
export declare class ApartamentsController {
    private apartamentService;
    constructor(apartamentService: ApartamentsService);
    getAllApartaments(): Promise<Apartament[]>;
    getApartament(apartamentId: number): Promise<Apartament>;
    createApartament(apartamentDto: CreateApartamentDto): Promise<Apartament>;
    updateApartament(apartamentId: number, apartamentDto: CreateApartamentDto): Promise<Apartament>;
    deleteApartament(apartamentId: number): Promise<void>;
}
