import { Injectable } from '@nestjs/common';
import { CreateBuildingConditionDto } from './dto/create-building_condition.dto';
import { UpdateBuildingConditionDto } from './dto/update-building_condition.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BuildingCondition } from '@prisma/client';

@Injectable()
export class BuildingConditionService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createBuildingConditionDto: CreateBuildingConditionDto) {
    return this.prismaService.buildingCondition.create({
      data: createBuildingConditionDto,
    });
  }

  findAll() {
    return this.prismaService.buildingCondition.findMany({
      include: {
        Object: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prismaService.buildingCondition.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateBuildingConditionDto: UpdateBuildingConditionDto,
  ): Promise<BuildingCondition | null> {
    return await this.prismaService.buildingCondition.update({
      where: { id },
      data: { ...updateBuildingConditionDto },
    });
  }

  async remove(id: number) {
    return this.prismaService.buildingCondition.delete({ where: { id } });
  }
}
