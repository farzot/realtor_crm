import { RenovationService } from './renovation.service';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';
export declare class RenovationController {
    private readonly renovationService;
    constructor(renovationService: RenovationService);
    create(createRenovationDto: CreateRenovationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRenovationDto: UpdateRenovationDto): string;
    remove(id: string): string;
}
