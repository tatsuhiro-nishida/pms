import {
  BadRequestException,
  Body,
  Catch,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Project } from './entities/project.entity';
import { Weekreport } from './entities/weekreport.entity';
import { Problem } from './entities/problem.entity';
import { Comment } from './entities/comment.entity';
import { Member } from './entities/member.entity';
import { Event } from './entities/event.entity';
import { Order } from './entities/order.entity';

@Controller('/v1/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/projects')
  async getProjects() {
    return this.appService.getProjects();
  }

  @Get('/projects/:id')
  async getProject(@Param('id') id: string) {
    return this.appService.getProject(id);
  }

  @Post('/projects')
  async addProject(@Body() project: Partial<Project>) {
    if (await this.appService.isExistsProject(project.name))
      throw new BadRequestException('name: ' + project.name + ' is registed');
    this.appService.addProject(new Project(project));
  }

  @Get('/weekreports')
  async getWeekreports() {
    return this.appService.getWeekreports();
  }

  @Get('/problems')
  async getProblems() {
    return this.appService.getProblems();
  }
  @Post('/problems')
  async addProblem(@Body() problem: Partial<Problem>) {
    if (
      await this.appService.isExistsProblem(problem.projectWeekId, problem.no)
    )
      throw new BadRequestException(
        'projectWeekId: ' +
          problem.projectWeekId +
          'no: ' +
          problem.no +
          ' is registed',
      );
    this.appService.addProblem(new Problem(problem));
  }
  @Post('/delproblem')
  async deleateProblem(@Body() problem: Partial<Problem>) {
    this.appService.deleateProblem(problem.projectWeekId, problem.no);
  }
  @Get('/comments')
  async getComments() {
    return this.appService.getComments();
  }
  @Get('/members')
  async getMembers() {
    return this.appService.getMembers();
  }
  @Get('/events')
  async getEvents() {
    return this.appService.getEvents();
  }
  @Get('/orders')
  async getOrders() {
    return this.appService.getOrders();
  }
}
