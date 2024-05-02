import { ObjectCategoryService } from './object_category.service';
import { CreateObjectCategoryDto } from './dto/create-object_category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object_category.dto';
export declare class ObjectCategoryController {
    private readonly objectCategoryService;
    constructor(objectCategoryService: ObjectCategoryService);
    create(createObjectCategoryDto: CreateObjectCategoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateObjectCategoryDto: UpdateObjectCategoryDto): string;
    remove(id: string): string;
}
