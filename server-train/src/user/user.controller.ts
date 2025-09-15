import { Controller, Get, HttpCode, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Get('profile')
  @ApiOperation({ summary: 'Get profile' })
  @ApiResponse({ status: 200, description: 'Get profile' })
  @Auth(Role.USER, Role.ADMIN)
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getById(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get favorites schedule' })
  @ApiResponse({ status: 200, description: 'Get favorites schedule' })
  @Patch('profile/schedule/:scheduleId')
  @Auth(Role.USER, Role.ADMIN)
  async toggleFavorites(
    @CurrentUser('id') id: string,
    @Param('scheduleId') scheduleId: string,
  ) {
    return this.userService.toggleFavorite(id, scheduleId);
  }
}
