import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OcorrenciaService } from './ocorrencia.service';
import { OcorrenciaController } from './ocorrencia.controller';
import { OcorrenciaEntity } from './entities/ocorrencia.entity';

@Module({
	imports: [TypeOrmModule.forFeature([OcorrenciaEntity])],
  controllers: [OcorrenciaController],
  providers: [OcorrenciaService]
})
export class OcorrenciaModule {}
