import { CreateWindowSideDto } from './dto/create-window_side.dto';
import { UpdateWindowSideDto } from './dto/update-window_side.dto';
export declare class WindowSideService {
    create(createWindowSideDto: CreateWindowSideDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWindowSideDto: UpdateWindowSideDto): string;
    remove(id: number): string;
}
