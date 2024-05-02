import { Injectable } from '@nestjs/common';
import { CreateFirmaDto } from './dto/create-firma.dto';
import { UpdateFirmaDto } from './dto/update-firma.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FirmaService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createFirmaDto: CreateFirmaDto) {
    return this.prismaService.firma.create({ data: createFirmaDto });
  }

  findAll() {
    return this.prismaService.firma.findMany({ include: { Realtor: true } });
  }

  findOne(id: number) {
    return this.prismaService.firma.findUnique({
      where: { id },
      include: { Realtor: true },
    });
  }

  update(id: number, updateFirmaDto: UpdateFirmaDto) {
    return this.prismaService.firma.update({
      where: { id },
      data: updateFirmaDto,
    });
  }

  remove(id: number) {
    return this.prismaService.firma.delete({ where: { id } });}
}
