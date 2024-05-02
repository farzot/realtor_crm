import { CreateResidentTypeDto } from './dto/create-resident_type.dto';
import { UpdateResidentTypeDto } from './dto/update-resident_type.dto';
export declare class ResidentTypeService {
    create(createResidentTypeDto: CreateResidentTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResidentTypeDto: UpdateResidentTypeDto): string;
    remove(id: number): string;
}
