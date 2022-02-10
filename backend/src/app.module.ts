import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MotoboyModule } from './motoboy/motoboy.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { OrdemModule } from './ordem/ordem.module';
import { EntregaModule } from './entrega/entrega.module';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';
//import { BloqueiosModule } from './bloqueios/bloqueios.module';
import { PixModule } from './pix/pix.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClienteModule, MotoboyModule, PagamentoModule, OrdemModule, EntregaModule, OcorrenciaModule, PixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
