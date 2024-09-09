import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface'; 

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): IUser {
    return { name: "Marlee" };
  }
}
