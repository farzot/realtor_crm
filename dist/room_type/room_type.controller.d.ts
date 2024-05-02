import { RoomTypeService } from './room_type.service';
import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
export declare class RoomTypeController {
    private readonly roomTypeService;
    constructor(roomTypeService: RoomTypeService);
    create(createRoomTypeDto: CreateRoomTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoomTypeDto: UpdateRoomTypeDto): string;
    remove(id: string): string;
}
