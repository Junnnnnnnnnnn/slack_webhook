import { DynamicModule, Module } from '@nestjs/common';
import { SlackService } from './slack.service';
import { SlackExtraDto } from './slack.dto';

@Module({
  providers: [SlackService],
  exports: [SlackService],
})
export class SlackModule {
  static forRoot(value: SlackExtraDto): DynamicModule {
    return {
      module: SlackModule,
      providers: [
        {
          provide: 'SLACK_EXTRA',
          useValue: value,
        },
        SlackService,
      ],
      exports: [SlackService],
    };
  }
}
