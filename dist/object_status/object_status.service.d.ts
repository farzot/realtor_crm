import { CreateObjectStatusDto } from './dto/create-object_status.dto';
import { UpdateObjectStatusDto } from './dto/update-object_status.dto';
export declare class ObjectStatusService {
    create(createObjectStatusDto: CreateObjectStatusDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateObjectStatusDto: UpdateObjectStatusDto): string;
    remove(id: number): string;
}
