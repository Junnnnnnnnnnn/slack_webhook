import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { SlackModule } from '@app/slack/slack.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SlackModule.forRoot({
      projectName: 'your-project-name',
      env: process.env.NODE_ENV,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
