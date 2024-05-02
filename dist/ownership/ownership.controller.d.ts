import { OwnershipService } from './ownership.service';
import { CreateOwnershipDto } from './dto/create-ownership.dto';
import { UpdateOwnershipDto } from './dto/update-ownership.dto';
export declare class OwnershipController {
    private readonly ownershipService;
    constructor(ownershipService: OwnershipService);
    create(createOwnershipDto: CreateOwnershipDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOwnershipDto: UpdateOwnershipDto): string;
    remove(id: string): string;
}
