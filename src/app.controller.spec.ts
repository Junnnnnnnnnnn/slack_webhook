import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { SlackModule } from '@app/slack/slack.module';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        SlackModule.forRoot({
          projectName: 'your-project-name',
          env: process.env.NODE_ENV,
        }),
      ],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('SLACK', () => {
    it('Post send slack channel"', () => {
      expect(appController.postSlackSample()).toBe('OK');
    });

    it('Post send button slack channel"', () => {
      expect(appController.postSlackButtonSample()).toBe('OK');
    });
  });
});
