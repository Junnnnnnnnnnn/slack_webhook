import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { SlackModule } from '@app/slack/slack.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        SlackModule.forRoot({
          projectName: 'your-project-name',
          env: process.env.NODE_ENV,
        }),
      ],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
