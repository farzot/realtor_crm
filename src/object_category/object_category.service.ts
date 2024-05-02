import { Injectable } from '@nestjs/common';
import { CreateObjectCategoryDto } from './dto/create-object_category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object_category.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectCategoryService {
  constructor(private readonly prismaService: PrismaService){}
  create(createObjectCategoryDto: CreateObjectCategoryDto) {
    return this.prismaService.objectCategory.create({data: createObjectCategoryDto});
  }

  findAll() {
    return this.prismaService.objectCategory.findMany({include: {Object: true}});
  }

  findOne(id: number) {
    return this.prismaService.objectCategory.findUnique({
      where: { id },
      include: { Object: true },
    });
  }

  update(id: number, updateObjectCategoryDto: UpdateObjectCategoryDto) {
    return this.prismaService.objectCategory.update({
      where: { id },
      data: updateObjectCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.objectCategory.delete({ where: { id } });
  }
}
