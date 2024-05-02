import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateBuildingConditionDto {
  @Optional()
  @IsString()
  name: string;
}
