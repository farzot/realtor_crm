import { CreateBuildingSeriaDto } from './dto/create-building_seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building_seria.dto';
export declare class BuildingSeriaService {
    create(createBuildingSeriaDto: CreateBuildingSeriaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBuildingSeriaDto: UpdateBuildingSeriaDto): string;
    remove(id: number): string;
}
