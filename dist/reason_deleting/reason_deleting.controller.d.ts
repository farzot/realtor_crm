import { ReasonDeletingService } from './reason_deleting.service';
import { CreateReasonDeletingDto } from './dto/create-reason_deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason_deleting.dto';
export declare class ReasonDeletingController {
    private readonly reasonDeletingService;
    constructor(reasonDeletingService: ReasonDeletingService);
    create(createReasonDeletingDto: CreateReasonDeletingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReasonDeletingDto: UpdateReasonDeletingDto): string;
    remove(id: string): string;
}
