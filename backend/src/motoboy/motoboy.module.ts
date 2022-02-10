import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoboyService } from './motoboy.service';
import { MotoboyController } from './motoboy.controller';
import { MotoboyEntity } from './entities/motoboy.entity';

@Module({
	imports: [TypeOrmModule.forFeature([MotoboyEntity])],
  controllers: [MotoboyController],
  providers: [MotoboyService]
})
export class MotoboyModule {}
