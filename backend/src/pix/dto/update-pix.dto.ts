import { PartialType } from '@nestjs/mapped-types';
import { CreatePixDto } from './create-pix.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePixDto extends PartialType(CreatePixDto) {}
