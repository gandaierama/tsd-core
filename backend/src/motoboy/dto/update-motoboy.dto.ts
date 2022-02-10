import { PartialType } from '@nestjs/mapped-types';
import { CreateMotoboyDto } from './create-motoboy.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMotoboyDto extends PartialType(CreateMotoboyDto) {}
