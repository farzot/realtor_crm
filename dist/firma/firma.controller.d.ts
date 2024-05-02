import { FirmaService } from './firma.service';
import { CreateFirmaDto } from './dto/create-firma.dto';
import { UpdateFirmaDto } from './dto/update-firma.dto';
export declare class FirmaController {
    private readonly firmaService;
    constructor(firmaService: FirmaService);
    create(createFirmaDto: CreateFirmaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFirmaDto: UpdateFirmaDto): string;
    remove(id: string): string;
}
