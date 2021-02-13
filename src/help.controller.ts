import {
  BadRequestException,
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { HelpService } from './help.service';
import { Project } from './entities/project.entity';
import { Help } from './entities/help.entity';

@Controller('/v1/help')
export class HelpController {
  constructor(private readonly helpService: HelpService) {}

  @Get('/helps')
  async getHelps() {
    return this.helpService.getHelps();
  }

  @Post('/helps')
  async addHelp(@Body() help: Partial<Help>) {
    this.helpService.addHelp(new Help(help));
  }

  @Delete('/helps/:id')
  async removeHelp(@Param('id') id: string) {
    return this.helpService.removeHelp(id);
  }
}
