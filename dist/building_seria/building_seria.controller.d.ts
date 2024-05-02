import { BuildingSeriaService } from './building_seria.service';
import { CreateBuildingSeriaDto } from './dto/create-building_seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building_seria.dto';
export declare class BuildingSeriaController {
    private readonly buildingSeriaService;
    constructor(buildingSeriaService: BuildingSeriaService);
    create(createBuildingSeriaDto: CreateBuildingSeriaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBuildingSeriaDto: UpdateBuildingSeriaDto): string;
    remove(id: string): string;
}
