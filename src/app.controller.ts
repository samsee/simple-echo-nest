import { Controller, Get, Logger, Query, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() queryParams, @Request() req) {
    const hostname = os.hostname();
    const ip = req.ip;
    const dateTime = new Date().toLocaleString();

    const responseData = {
      queryParams,
      hostname,
      ip,
      dateTime,
    };

    Logger.log(responseData);

    return responseData;
  }
}
