import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingConditionDto } from './create-building_condition.dto';
import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class UpdateBuildingConditionDto extends PartialType(
  CreateBuildingConditionDto,
) {
  // @Optional()
  @IsString()
  name: string;
}
