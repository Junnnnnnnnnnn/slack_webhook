import { SlackService } from '@app/slack/slack.service';
import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly slackService: SlackService) {}

  @Post('sample')
  @HttpCode(HttpStatus.OK)
  postSlackSample(): string {
    this.slackService.sendInfo(
      'Test send info',
      [
        {
          title: 'slack module test',
          value: 'hello world',
        },
      ],
      new Date().toISOString(),
    );

    return 'OK';
  }

  @Post('sample/button')
  @HttpCode(HttpStatus.OK)
  postSlackButtonSample(): string {
    this.slackService.sendInfo(
      'Test send info',
      [
        {
          title: 'slack button module test',
          value: 'hello google',
        },
      ],
      new Date().toISOString(),
      {
        text: 'google Button',
        url: 'https://google.com',
      },
    );

    return 'OK';
  }
}
