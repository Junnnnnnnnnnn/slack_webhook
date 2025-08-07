export interface SlackExtraDto {
  env: string;
  projectName: string;
}

export interface SlackField {
  title: string;
  value: string;
}

export interface SlackButton {
  text: string;
  url: string;
}
