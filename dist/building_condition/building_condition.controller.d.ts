import { BuildingConditionService } from './building_condition.service';
import { CreateBuildingConditionDto } from './dto/create-building_condition.dto';
import { UpdateBuildingConditionDto } from './dto/update-building_condition.dto';
export declare class BuildingConditionController {
    private readonly buildingConditionService;
    constructor(buildingConditionService: BuildingConditionService);
    create(createBuildingConditionDto: CreateBuildingConditionDto): any;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        Object: {
            id: number;
            name: string;
            is_studio: boolean;
            floor: number;
            floor_in_building: number;
            total_area: import("@prisma/client/runtime/library").Decimal;
            live_area: import("@prisma/client/runtime/library").Decimal;
            kitchen_area: import("@prisma/client/runtime/library").Decimal;
            rooms_area: import("@prisma/client/runtime/library").Decimal;
            price: import("@prisma/client/runtime/library").Decimal;
            price_per_square: import("@prisma/client/runtime/library").Decimal;
            price_type: string;
            is_apartment: boolean;
            is_luxury: boolean;
            ceiling_height: number;
            combined_bath_count: number;
            separate_bath_count: number;
            loggia_count: number;
            loggia_desciption: string;
            balcony_count: number;
            balcony_description: string;
            general_description: string;
            cadastral_number: number;
            document: string;
            layout: string;
            fotos: string;
            online_show: boolean;
            video: string;
            commision_amount: import("@prisma/client/runtime/library").Decimal;
            commision_comment: string;
            deposit_amount: import("@prisma/client/runtime/library").Decimal;
            deposit_paid: import("@prisma/client/runtime/library").Decimal;
            owner_price_ideal: import("@prisma/client/runtime/library").Decimal;
            owner_price_real: import("@prisma/client/runtime/library").Decimal;
            owner_price_minimal: import("@prisma/client/runtime/library").Decimal;
            area_id: string;
            house_number: number;
            apartment_id: number;
            location: string;
            landmark: string;
            location_description: string;
            building_year: number;
            is_gas: boolean;
            is_electric: boolean;
            passeger_elevators_count: number;
            freight_elevators_count: number;
            is_building_security: boolean;
            is_demolition_planned: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        objectId: number;
    })[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        objectId: number;
    }>;
    update(id: string, updateBuildingConditionDto: UpdateBuildingConditionDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        objectId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        objectId: number;
    }>;
}
