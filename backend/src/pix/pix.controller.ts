import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PixService } from './pix.service';
import { CreatePixDto } from './dto/create-pix.dto';
import { UpdatePixDto } from './dto/update-pix.dto';

@Controller('pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post()
  create(@Body() createPixDto: CreatePixDto) {
    return this.pixService.create(createPixDto);
  }

  @Get()
  findAll() {
    return this.pixService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pixService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePixDto: UpdatePixDto) {
    return this.pixService.update(+id, updatePixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pixService.remove(+id);
  }
}
