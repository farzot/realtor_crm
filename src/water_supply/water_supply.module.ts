import { Module } from '@nestjs/common';
import { WaterSupplyService } from './water_supply.service';
import { WaterSupplyController } from './water_supply.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WaterSupplyController],
  providers: [WaterSupplyService],
})
export class WaterSupplyModule {}
