import { PartialType } from '@nestjs/mapped-types';
import { CreatePagamentoDto } from './create-pagamento.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePagamentoDto extends PartialType(CreatePagamentoDto) {}
