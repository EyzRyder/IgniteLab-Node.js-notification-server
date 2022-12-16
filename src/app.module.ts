import { DatabaseModule } from '@infra/database/database.module';
import { httpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [httpModule, DatabaseModule],
})
export class AppModule { }
