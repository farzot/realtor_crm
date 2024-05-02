import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';
export declare class RenovationService {
    create(createRenovationDto: CreateRenovationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRenovationDto: UpdateRenovationDto): string;
    remove(id: number): string;
}
