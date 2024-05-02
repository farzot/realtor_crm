import { Injectable } from '@nestjs/common';
import { CreateResidentTypeDto } from './dto/create-resident_type.dto';
import { UpdateResidentTypeDto } from './dto/update-resident_type.dto';
import { PrismaService } from '../prisma/prisma.service';
import { IncomingMessage } from 'http';

@Injectable()
export class ResidentTypeService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createResidentTypeDto: CreateResidentTypeDto) {
    return this.prismaService.residentType.create({
      data: createResidentTypeDto,
    });
  }

  findAll() {
    return this.prismaService.residentType.findMany({
      include: { Object: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.residentType.findUnique({ where: { id } });
  }

  update(id: number, updateResidentTypeDto: UpdateResidentTypeDto) {
    return this.prismaService.residentType.update({
      where: { id },
      data: updateResidentTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.residentType.delete({ where: { id } });
  }
}
