import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixService } from './pix.service';
import { PixController } from './pix.controller';
import { PixEntity } from './entities/pix.entity';

@Module({
	imports: [TypeOrmModule.forFeature([PixEntity])],
  controllers: [PixController],
  providers: [PixService]
})
export class PixModule {}
