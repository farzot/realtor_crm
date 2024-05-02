import { Module } from '@nestjs/common';
import { ObjectStatusService } from './object_status.service';
import { ObjectStatusController } from './object_status.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [ObjectStatusController],
  providers: [ObjectStatusService],
})
export class ObjectStatusModule {}
