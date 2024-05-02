import { Module } from '@nestjs/common';
import { ResidentTypeService } from './resident_type.service';
import { ResidentTypeController } from './resident_type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ResidentTypeController],
  providers: [ResidentTypeService],
})
export class ResidentTypeModule {}
