import { Inject, Injectable } from '@nestjs/common';
import { SlackExtraDto, SlackField } from './slack.dto';
import { IncomingWebhook } from '@slack/webhook';

@Injectable()
export class SlackService {
  private readonly SLACK_WEBHOOK = '';

  private readonly webhook: IncomingWebhook;

  constructor(
    @Inject('SLACK_EXTRA')
    private readonly slackExtra: SlackExtraDto,
  ) {
    this.webhook = new IncomingWebhook(this.SLACK_WEBHOOK);
  }

  sendError(title: string, fieldList: SlackField[], footer: string): void {
    this.webhook.send({
      text: this.slackExtra.projectName,
      attachments: [
        {
          color: '#FF0000', // red color
          title: `🔥 ${title}`,
          text: `*Project*: \`${this.slackExtra.projectName}\``,
          fields: fieldList,
          footer,
          ts: Math.floor(Date.now() / 1000).toString(),
        },
      ],
    });
  }

  sendInfo(title: string, fieldList: SlackField[], footer: string): void {
    this.webhook.send({
      text: this.slackExtra.projectName,
      attachments: [
        {
          color: '#36C5F0', // blue color
          title: `ℹ️ ${title}`,
          text: `*Project*: \`${this.slackExtra.projectName}\``,
          fields: fieldList,
          footer,
          ts: Math.floor(Date.now() / 1000).toString(),
        },
      ],
    });
  }
}
