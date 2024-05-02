import { ObjectTypeService } from './object_type.service';
import { CreateObjectTypeDto } from './dto/create-object_type.dto';
import { UpdateObjectTypeDto } from './dto/update-object_type.dto';
export declare class ObjectTypeController {
    private readonly objectTypeService;
    constructor(objectTypeService: ObjectTypeService);
    create(createObjectTypeDto: CreateObjectTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateObjectTypeDto: UpdateObjectTypeDto): string;
    remove(id: string): string;
}
