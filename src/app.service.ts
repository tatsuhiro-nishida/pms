import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { Weekreport } from './entities/weekreport.entity';
import { Problem } from './entities/problem.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>, //追加！
    @InjectRepository(Weekreport)
    private readonly weekreportRepository: Repository<Weekreport>, //追加！
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>, //追加！
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async isExistsProject(name: string) {
    const result = await this.projectRepository.findOne({ name: name });
    return result ? true : false;
  }

  async addProject(project: Project) {
    this.projectRepository.insert(project);
  }

  getProjects() {
    return this.projectRepository.find();
  }

  getProject(id: string) {
    throw new Error('Method not implemented.');
  }

  getWeekreports() {
    return this.weekreportRepository.find();
  }

  getProblems() {
    return this.problemRepository.find();
  }
}
