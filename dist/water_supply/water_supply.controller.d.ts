import { WaterSupplyService } from './water_supply.service';
import { CreateWaterSupplyDto } from './dto/create-water_supply.dto';
import { UpdateWaterSupplyDto } from './dto/update-water_supply.dto';
export declare class WaterSupplyController {
    private readonly waterSupplyService;
    constructor(waterSupplyService: WaterSupplyService);
    create(createWaterSupplyDto: CreateWaterSupplyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWaterSupplyDto: UpdateWaterSupplyDto): string;
    remove(id: string): string;
}
