import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pdt')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('1')
  /*The getHello metho is invoked whenever the / endpoint is reached.*/
  getHello(): string {
    return this.appService.getHello();
  }
}
