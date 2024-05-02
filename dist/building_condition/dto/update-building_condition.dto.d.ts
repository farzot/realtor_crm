import { CreateBuildingConditionDto } from './create-building_condition.dto';
declare const UpdateBuildingConditionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBuildingConditionDto>>;
export declare class UpdateBuildingConditionDto extends UpdateBuildingConditionDto_base {
    name: string;
}
export {};
