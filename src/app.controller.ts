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
}
