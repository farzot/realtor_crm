import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterSupplyDto } from './create-water_supply.dto';

export class UpdateWaterSupplyDto extends PartialType(CreateWaterSupplyDto) {
    name?: string;
}
