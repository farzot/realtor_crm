import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCurrencyDto: CreateCurrencyDto) {
    return this.prismaService.currency.create({data: createCurrencyDto})
  }

  findAll() {
    return this.prismaService.currency.findMany({include: {Object: true}});
  }

  findOne(id: number) {
    return this.prismaService.currency.findUnique({where: {id}, include:{Object: true}});
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return this.prismaService.currency.update({where: {id}, data: updateCurrencyDto});
  }

  remove(id: number) {
    return this.prismaService.currency.delete({where: {id}});
  }
}
