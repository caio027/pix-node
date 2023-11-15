import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
})
export class AppModule {}
