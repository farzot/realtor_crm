import { Injectable } from '@nestjs/common';
import { CreateWindowSideDto } from './dto/create-window_side.dto';
import { UpdateWindowSideDto } from './dto/update-window_side.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WindowSideService {
  constructor (private readonly prismaPrisma: PrismaService){}

  create(createWindowSideDto: CreateWindowSideDto) {
    return this.prismaPrisma.windowSide.create({data: createWindowSideDto});
  }

  findAll() {
    return this.prismaPrisma.windowSide.findMany();
  }

  findOne(id: number) {
    return this.prismaPrisma.windowSide.findUnique({where: {id}});
  }

  update(id: number, updateWindowSideDto: UpdateWindowSideDto) {
    return this.prismaPrisma.windowSide.update({where: {id}, data: updateWindowSideDto});
  }

  remove(id: number) {
    return this.prismaPrisma.windowSide.delete({where: {id}});
  }
}
