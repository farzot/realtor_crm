import { Module } from '@nestjs/common';
import { BuildingConditionService } from './building_condition.service';
import { BuildingConditionController } from './building_condition.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BuildingConditionController],
  providers: [BuildingConditionService],
})
export class BuildingConditionModule {}
