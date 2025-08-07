import { Test, TestingModule } from '@nestjs/testing';
import { SlackService } from './slack.service';
import { SlackModule } from './slack.module';
import { ConfigModule } from '@nestjs/config';

describe('SlackService', () => {
  let service: SlackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        SlackModule.forRoot({
          projectName: 'your-project-name',
          env: process.env.NODE_ENV,
        }),
      ],
    }).compile();

    service = module.get<SlackService>(SlackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
