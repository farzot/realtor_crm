import { CreateObjectTypeDto } from './dto/create-object_type.dto';
import { UpdateObjectTypeDto } from './dto/update-object_type.dto';
export declare class ObjectTypeService {
    create(createObjectTypeDto: CreateObjectTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateObjectTypeDto: UpdateObjectTypeDto): string;
    remove(id: number): string;
}
