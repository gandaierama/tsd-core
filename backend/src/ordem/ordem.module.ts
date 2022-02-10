import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdemService } from './ordem.service';
import { OrdemController } from './ordem.controller';
import { OrdemEntity } from './entities/ordem.entity';

@Module({
	imports: [TypeOrmModule.forFeature([OrdemEntity])],
  controllers: [OrdemController],
  providers: [OrdemService]
})
export class OrdemModule {}
