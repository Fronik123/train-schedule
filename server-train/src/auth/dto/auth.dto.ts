import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Password must be at least 6 charcaters long',
  })
  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  role?: string;
}
