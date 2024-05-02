import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
export declare class RoomTypeService {
    create(createRoomTypeDto: CreateRoomTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRoomTypeDto: UpdateRoomTypeDto): string;
    remove(id: number): string;
}
