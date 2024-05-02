import { CreateWaterSupplyDto } from './dto/create-water_supply.dto';
import { UpdateWaterSupplyDto } from './dto/update-water_supply.dto';
export declare class WaterSupplyService {
    create(createWaterSupplyDto: CreateWaterSupplyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWaterSupplyDto: UpdateWaterSupplyDto): string;
    remove(id: number): string;
}
