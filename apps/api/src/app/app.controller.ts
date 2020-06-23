import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  getData() {
    return this.appService.getData();
  }

  @Post('addBook')
  addBook() {
    return this.appService.addBook();
  }
}
