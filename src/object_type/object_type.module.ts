import { Module } from '@nestjs/common';
import { ObjectTypeService } from './object_type.service';
import { ObjectTypeController } from './object_type.controller';

@Module({
  controllers: [ObjectTypeController],
  providers: [ObjectTypeService],
})
export class ObjectTypeModule {}
