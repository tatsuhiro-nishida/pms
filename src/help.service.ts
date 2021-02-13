import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Help } from './entities/help.entity';

@Injectable()
export class HelpService {
  constructor(
    @InjectRepository(Help)
    private readonly helpRepository: Repository<Help>, //追加！
  ) {}

  async addHelp(help: Help) {
    if (help.id) {
      this.helpRepository.update(help.id, help);
    } else {
      const h = this.helpRepository.create(help);
      this.helpRepository.insert(h);
    }
  }

  async removeHelp(id: string) {
    const help = await this.helpRepository.findOne(id);
    this.helpRepository.remove(help);
  }

  getHelps() {
    return this.helpRepository.find();
  }
}
