import { PartialType } from '@nestjs/mapped-types';
import { CreateOcorrenciaDto } from './create-ocorrencia.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOcorrenciaDto extends PartialType(CreateOcorrenciaDto) {}
