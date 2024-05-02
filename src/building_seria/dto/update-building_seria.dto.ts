import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingSeriaDto } from './create-building_seria.dto';

export class UpdateBuildingSeriaDto extends PartialType(CreateBuildingSeriaDto) {}
