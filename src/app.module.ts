import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { FirmaModule } from './firma/firma.module';
import { BuildingConditionModule } from './building_condition/building_condition.module';
import { BuildingSeriaModule } from './building_seria/building_seria.module';
import { WaterSupplyModule } from './water_supply/water_supply.module';
import { ParkingModule } from './parking/parking.module';
import { ResidentTypeModule } from './resident_type/resident_type.module';
import { ObjectTypeModule } from './object_type/object_type.module';
import { ObjectCategoryModule } from './object_category/object_category.module';
import { ObjectStatusModule } from './object_status/object_status.module';
import { CurrencyModule } from './currency/currency.module';
import { RenovationModule } from './renovation/renovation.module';
import { WindowSideModule } from './window_side/window_side.module';
import { RoomTypeModule } from './room_type/room_type.module';
import { OwnershipModule } from './ownership/ownership.module';
import { ReasonDeletingModule } from './reason_deleting/reason_deleting.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PrismaModule,
    FirmaModule,
    BuildingConditionModule,
    BuildingSeriaModule,
    WaterSupplyModule,
    ParkingModule,
    ResidentTypeModule,
    ObjectTypeModule,
    ObjectCategoryModule,
    ObjectStatusModule,
    CurrencyModule,
    RenovationModule,
    WindowSideModule,
    RoomTypeModule,
    OwnershipModule,
    ReasonDeletingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
