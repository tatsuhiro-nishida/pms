import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project> //追加！
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async addProject(project:Project) {
    const p =  await this.projectRepository.findOne({"name": project.name});
    if (p) throw new BadRequestException("name: " + p.name + " is registed");
    this.projectRepository.insert(project);
  }

  getProjects() {
    return this.projectRepository.find();
  }

  getProject(id: string) {
    throw new Error('Method not implemented.');
  }
}
