import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Auth } from './decorators/auth.decorator';
import { Role } from './enums/role.enum';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @ApiOperation({ summary: 'login' })
  @ApiResponse({ status: 200, description: 'login' })
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login/access-token')
  @ApiOperation({ summary: 'access token' })
  @ApiResponse({ status: 200, description: 'access token' })
  @Auth(Role.USER, Role.ADMIN)
  async getNewTokens(@Body() dto: RefreshTokenDto) {
    return this.authService.getNewTokens(dto.refreshToken);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({ status: 200, description: 'Register user' })
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }
}
