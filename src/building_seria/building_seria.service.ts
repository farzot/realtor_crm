import { Injectable } from '@nestjs/common';
import { CreateBuildingSeriaDto } from './dto/create-building_seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building_seria.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BuildingSeriaService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createBuildingSeriaDto: CreateBuildingSeriaDto) {
    return this.prismaService.buildingSeria.create({
      data: createBuildingSeriaDto,
    });
  }

  findAll() {
    return this.prismaService.buildingSeria.findMany({
      include: {
        Object: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.buildingSeria.findUnique({
      where: { id },
      include: { Object: true },
    });
  }

  update(id: number, updateBuildingSeriaDto: UpdateBuildingSeriaDto) {
    return this.prismaService.buildingSeria.update({
      where: { id },
      data: updateBuildingSeriaDto,
    });
  }

  remove(id: number) {
    return this.prismaService.buildingSeria.delete({
      where: { id },
    });
  }
}
