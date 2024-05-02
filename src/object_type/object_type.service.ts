import { Injectable } from '@nestjs/common';
import { CreateObjectTypeDto } from './dto/create-object_type.dto';
import { UpdateObjectTypeDto } from './dto/update-object_type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectTypeService {
  constructor(private readonly prismaService: PrismaService){}
  create(createObjectTypeDto: CreateObjectTypeDto) {
    return this.prismaService.objectType.create({ data: createObjectTypeDto });
  }

  findAll() {
    return this.prismaService.objectType.findMany({
      include: {
        Object: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.objectType.findUnique({ where: { id }, include:{Object: true}});
  }

  update(id: number, updateObjectTypeDto: UpdateObjectTypeDto) {
    return this.prismaService.objectType.update({
      where: { id },
      data: updateObjectTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.objectType.delete({ where: { id } });
  }
}
