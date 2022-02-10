import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregaDto } from './create-entrega.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEntregaDto extends PartialType(CreateEntregaDto) {}
