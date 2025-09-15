import { Controller, Get, HttpCode, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth(Role.USER, Role.ADMIN)
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getById(id);
  }

  @HttpCode(200)
  @Patch('profile/schedule/:scheduleId')
  @Auth(Role.USER, Role.ADMIN)
  async toggleFavorites(
    @CurrentUser('id') id: string,
    @Param('scheduleId') scheduleId: string,
  ) {
    return this.userService.toggleFavorite(id, scheduleId);
  }
}
