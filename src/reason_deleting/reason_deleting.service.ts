import { Injectable } from '@nestjs/common';
import { CreateReasonDeletingDto } from './dto/create-reason_deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason_deleting.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReasonDeletingService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createReasonDeletingDto: CreateReasonDeletingDto) {
    return this.prismaService.reasonDeleting.create({
      data: createReasonDeletingDto,
    });
  }

  findAll() {
    return this.prismaService.reasonDeleting.findMany({
      include: { Object: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.reasonDeleting.findUnique({
      where: { id },
      include: { Object: true },
    });
  }

  update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return this.prismaService.reasonDeleting.update({
      where: { id },
      data: updateReasonDeletingDto,
    });
  }

  remove(id: number) {
    return this.prismaService.reasonDeleting.delete({
      where: { id },
    });
  }
}
