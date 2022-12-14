import { PrismaService } from './prisma.service';
import { httpModule } from './http.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';


@Module({
  imports: [httpModule],
  controllers: [AppController],
  providers: [PrismaService,],
})
export class AppModule {}
