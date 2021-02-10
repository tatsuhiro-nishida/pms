import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Help } from './entities/help.entity';

@Injectable()
export class HelpService {
  
  constructor(
    @InjectRepository(Help)
    private readonly helpRepository: Repository<Help> //追加！
  ) { }

  async addHelp(help:Help) {
    
    this.helpRepository.save(help);
  }

  getHelps() {
    return this.helpRepository.find();
  }

}
