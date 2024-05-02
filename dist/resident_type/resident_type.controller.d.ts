import { ResidentTypeService } from './resident_type.service';
import { CreateResidentTypeDto } from './dto/create-resident_type.dto';
import { UpdateResidentTypeDto } from './dto/update-resident_type.dto';
export declare class ResidentTypeController {
    private readonly residentTypeService;
    constructor(residentTypeService: ResidentTypeService);
    create(createResidentTypeDto: CreateResidentTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResidentTypeDto: UpdateResidentTypeDto): string;
    remove(id: string): string;
}
