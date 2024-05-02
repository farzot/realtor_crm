import { Injectable } from '@nestjs/common';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RenovationService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRenovationDto: CreateRenovationDto) {
    return this.prismaService.renovation.create({
      data: createRenovationDto,
    });
  }

  findAll() {
    return this.prismaService.renovation.findMany({
      include: { Object: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.renovation.findUnique({
      where: { id },
      include: { Object: true },
    });
  }

  async update(id: number, updateRenovationDto: UpdateRenovationDto) {
    return await this.prismaService.reasonDeleting.update({
      where: { id },
      data: { ...updateRenovationDto },
    });
  }

  remove(id: number) {
    return this.prismaService.renovation.delete({ where: { id } });
  }
}
