import { CreateReasonDeletingDto } from './dto/create-reason_deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason_deleting.dto';
export declare class ReasonDeletingService {
    create(createReasonDeletingDto: CreateReasonDeletingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto): string;
    remove(id: number): string;
}
