import { Injectable } from '@nestjs/common';
import { CreateObjectStatusDto } from './dto/create-object_status.dto';
import { UpdateObjectStatusDto } from './dto/update-object_status.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectStatusService {
  constructor(private readonly prismaService: PrismaService){}
  create(createObjectStatusDto: CreateObjectStatusDto) {
    return this.prismaService.objectStatus.create({data: createObjectStatusDto});
  }

  findAll() {
    return this.prismaService.objectStatus.findMany({
      include: {
        Object: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.objectStatus.findUnique({ where: { id }, include: {Object: true} });
  }

  update(id: number, updateObjectStatusDto: UpdateObjectStatusDto) {
    return this.prismaService.objectStatus.update({ where: { id }, data: updateObjectStatusDto});
  
  }

  remove(id: number) {
    return this.prismaService.objectStatus.delete({ where: { id } });
  }
}
