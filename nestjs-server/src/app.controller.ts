import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getSpecificName(): IUser {
    return this.appService.getName();
  }
}
