import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { EmojiValidationPipe } from './common/emoji-validation/emoji-validation.pipe';

import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("emoji")
  getEmoji(
    @Req() request: Request,
    @Query(`index`, EmojiValidationPipe) index?: number
  ) {

    console.log(request.header);
    console.log(request.headers.browser);
    return {
      browser: request.headers['browser'],
      emoji: this.appService.getEmoji(index)
    };
  }
}
