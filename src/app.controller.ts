import { BadRequestException, Body, Catch, Controller, Get, Param, Post } from '@nestjs/common';
import { throws } from 'assert';
import e from 'express';
import { AppService } from './app.service';
import { Project } from './entities/project.entity';

@Controller("/v1/app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/projects")
  async getProjects() {
    return this.appService.getProjects();
  }

  @Get("/projects/:id")
  async getProject(@Param("id") id: string) {
    return this.appService.getProject(id);
  }

  @Post("/projects")
  addProject(@Body() project: Partial<Project>) {
    this.appService.addProject(new Project(project));
  }

}
