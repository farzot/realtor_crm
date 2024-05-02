import { PartialType } from '@nestjs/mapped-types';
import { CreateResidentTypeDto } from './create-resident_type.dto';

export class UpdateResidentTypeDto extends PartialType(CreateResidentTypeDto) {}
