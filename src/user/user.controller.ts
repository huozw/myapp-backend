import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('finduserInfo/:id')
  fiindUserInfo(@Request() req) {
    return {
      code: 200,
      res: req.params.id,
    };
  }

  @Post('login')
  login(@Body() body: any) {
    return {
      code: 200,
      data: body,
    };
  }
}
