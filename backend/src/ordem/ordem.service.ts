import { Injectable } from '@nestjs/common';
import { CreateOrdemDto } from './dto/create-ordem.dto';
import { UpdateOrdemDto } from './dto/update-ordem.dto';
import { OrdemEntity } from './entities/ordem.entity';

@Injectable()
export class OrdemService {
  create(createOrdemDto: CreateOrdemDto) {
    return 'This action adds a new ordem';
  }

  findAll() {
    return `This action returns all ordem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordem`;
  }

  update(id: number, updateOrdemDto: UpdateOrdemDto) {
    return `This action updates a #${id} ordem`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordem`;
  }
}
