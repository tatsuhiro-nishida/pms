import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { HelpController } from './help.controller';
import { Help } from './entities/help.entity';
import { HelpService } from './help.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Project, Help])],
  controllers: [AppController, HelpController],
  providers: [AppService, HelpService],
})
export class AppModule {}
