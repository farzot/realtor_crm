import { Injectable } from '@nestjs/common';
import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomTypeService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRoomTypeDto: CreateRoomTypeDto) {
    return this.prismaService.roomType.create({data: createRoomTypeDto});
  }

  findAll() {
    return this.prismaService.roomType.findMany({
      include: {
        Object: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.roomType.findUnique({ where: { id } });
  }

  update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return this.prismaService.roomType.update({
      where: { id },
      data :updateRoomTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.roomType.delete({ where: { id } });
  }
}
