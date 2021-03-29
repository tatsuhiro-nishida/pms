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
import { HelpController } from './help.controller';
import { Help } from './entities/help.entity';
import { HelpService } from './help.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Project, Help]),
    TypeOrmModule.forFeature([Project]),
    TypeOrmModule.forFeature([Weekreport]),
    TypeOrmModule.forFeature([Problem]),
    TypeOrmModule.forFeature([Comment]),
    TypeOrmModule.forFeature([Member]),
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [AppController, HelpController],
  providers: [AppService, HelpService],
})
export class AppModule {}
