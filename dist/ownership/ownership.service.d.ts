import { CreateOwnershipDto } from './dto/create-ownership.dto';
import { UpdateOwnershipDto } from './dto/update-ownership.dto';
export declare class OwnershipService {
    create(createOwnershipDto: CreateOwnershipDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOwnershipDto: UpdateOwnershipDto): string;
    remove(id: number): string;
}
