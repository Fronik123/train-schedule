import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ScheduleDto } from './dto/schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  async getAll(@Query('search') search?: string) {
    return this.scheduleService.getAll(search);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.scheduleService.byId(id);
  }

  @HttpCode(200)
  @Post('create')
  @Auth(Role.ADMIN)
  async create(@Body() data: ScheduleDto) {
    return this.scheduleService.create(data);
  }

  @HttpCode(200)
  @Put(':id')
  @Auth(Role.ADMIN)
  async update(@Param('id') id: string, @Body() dto: ScheduleDto) {
    return this.scheduleService.update(id, dto);
  }

  @HttpCode(200)
  @Auth(Role.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.scheduleService.delete(id);
  }
}
