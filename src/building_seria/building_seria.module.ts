import { Module } from '@nestjs/common';
import { BuildingSeriaService } from './building_seria.service';
import { BuildingSeriaController } from './building_seria.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BuildingSeriaController],
  providers: [BuildingSeriaService],
})
export class BuildingSeriaModule {}
