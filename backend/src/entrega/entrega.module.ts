import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregaService } from './entrega.service';
import { EntregaController } from './entrega.controller';
import { EntregaEntity } from './entities/entrega.entity';

@Module({
	imports: [TypeOrmModule.forFeature([EntregaEntity])],
  controllers: [EntregaController],
  providers: [EntregaService]
})
export class EntregaModule {}
