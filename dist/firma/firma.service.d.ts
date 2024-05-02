import { CreateFirmaDto } from './dto/create-firma.dto';
import { UpdateFirmaDto } from './dto/update-firma.dto';
export declare class FirmaService {
    create(createFirmaDto: CreateFirmaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFirmaDto: UpdateFirmaDto): string;
    remove(id: number): string;
}
