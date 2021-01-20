import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Weekreport } from './entities/weekreport.entity';
import { Problem } from './entities/problem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([Weekreport]),
    TypeOrmModule.forFeature([Problem]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
