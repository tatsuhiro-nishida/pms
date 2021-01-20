import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { Weekreport } from './entities/weekreport.entity';
import { Problem } from './entities/problem.entity';
import { Comment } from './entities/comment.entity';
import { Member } from './entities/member.entity';
import { Event } from './entities/event.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>, //追加！
    @InjectRepository(Weekreport)
    private readonly weekreportRepository: Repository<Weekreport>, //追加！
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>, //追加！
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>, //追加！
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>, //追加！
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>, //追加！
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>, //追加！
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
  getComments() {
    return this.commentRepository.find();
  }
  getMembers() {
    return this.memberRepository.find();
  }
  getEvents() {
    return this.eventRepository.find();
  }
  getOrders() {
    return this.orderRepository.find();
  }
}
