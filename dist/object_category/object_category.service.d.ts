import { CreateObjectCategoryDto } from './dto/create-object_category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object_category.dto';
export declare class ObjectCategoryService {
    create(createObjectCategoryDto: CreateObjectCategoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateObjectCategoryDto: UpdateObjectCategoryDto): string;
    remove(id: number): string;
}
