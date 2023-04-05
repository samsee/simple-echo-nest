import { Query, Request } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(@Query() queryParams, @Request() req) {
    const hostname = req.hostname;
    const ip = req.ip;
    const dateTime = new Date();

    const responseData = {
      queryParams,
      hostname,
      ip,
      dateTime,
    };

    return responseData;
  }
}
