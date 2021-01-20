import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Weekreport } from './entities/weekreport.entity';
import { Problem } from './entities/problem.entity';
import { Comment } from './entities/comment.entity';
import { Member } from './entities/member.entity';
import { Event } from './entities/event.entity';
import { Order } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([Weekreport]),
    TypeOrmModule.forFeature([Problem]),
    TypeOrmModule.forFeature([Comment]),
    TypeOrmModule.forFeature([Member]),
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
