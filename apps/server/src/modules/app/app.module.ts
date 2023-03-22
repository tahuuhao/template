import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '../mikro-orm/mikro-orm.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MikroOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
