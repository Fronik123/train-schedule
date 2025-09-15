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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @HttpCode(200)
  @Get()
  @ApiOperation({ summary: 'Get all schedule' })
  @ApiResponse({ status: 200, description: 'Schedule train' })
  async getAll(@Query('search') search?: string) {
    return this.scheduleService.getAll(search);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get schedule by Id' })
  @ApiParam({ name: 'id', description: 'Id schedule', example: 1 })
  @ApiResponse({ status: 200, description: 'Schedule train by Id' })
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.scheduleService.byId(id);
  }

  @HttpCode(200)
  @Post('create')
  @ApiBody({ type: ScheduleDto })
  @ApiOperation({ summary: 'Create schedule' })
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
  @ApiOperation({ summary: 'Delete schedule Id' })
  @ApiParam({ name: 'id', description: 'Delete schedule Id', example: 1 })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.scheduleService.delete(id);
  }
}
