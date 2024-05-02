import { ObjectStatusService } from './object_status.service';
import { CreateObjectStatusDto } from './dto/create-object_status.dto';
import { UpdateObjectStatusDto } from './dto/update-object_status.dto';
export declare class ObjectStatusController {
    private readonly objectStatusService;
    constructor(objectStatusService: ObjectStatusService);
    create(createObjectStatusDto: CreateObjectStatusDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateObjectStatusDto: UpdateObjectStatusDto): string;
    remove(id: string): string;
}
