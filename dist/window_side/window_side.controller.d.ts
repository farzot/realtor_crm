import { WindowSideService } from './window_side.service';
import { CreateWindowSideDto } from './dto/create-window_side.dto';
import { UpdateWindowSideDto } from './dto/update-window_side.dto';
export declare class WindowSideController {
    private readonly windowSideService;
    constructor(windowSideService: WindowSideService);
    create(createWindowSideDto: CreateWindowSideDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWindowSideDto: UpdateWindowSideDto): string;
    remove(id: string): string;
}
