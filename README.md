# Slack Webhook Notifier

[![Stars](https://img.shields.io/github/stars/Junnnnnnnnnnn/slack_webhook?style=flat-square)](https://github.com/Junnnnnnnnnnn/slack_webhook/stargazers)
[![Forks](https://img.shields.io/github/forks/Junnnnnnnnnnn/slack_webhook?style=flat-square)](https://github.com/Junnnnnnnnnnn/slack_webhook/network/members)
[![Issues](https://img.shields.io/github/issues/Junnnnnnnnnnn/slack_webhook?style=flat-square)](https://github.com/Junnnnnnnnnnn/slack_webhook/issues)

A simple, ready-to-use NestJS project that sends Slack notifications using webhooks. This project is designed to be easily configurable and can be integrated into any workflow that requires Slack notifications.

## ✨ Features

- **Easy to Use**: Simply provide your Slack Webhook URL and you're ready to go.
- **Extensible**: Built with NestJS, making it easy to extend and add new features.
- **Well-Tested**: Includes a suite of unit and end-to-end tests.
- **Clean Code**: Follows best practices for code style and project structure.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- A [Slack Webhook URL](https://api.slack.com/messaging/webhooks)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Junnnnnnnnnnn/slack_webhook.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up your environment:**

    Create a `.env` file in the root of the project and add your Slack Webhook URL:

    ```
    SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
    ```

### Running the Application

- **Development Mode:**

  ```bash
  npm run start:dev
  ```

- **Production Mode:**

  ```bash
  npm run start:prod
  ```

## 🧪 Testing

This project comes with a set of tests to ensure everything is working as expected.

1.  **Run unit tests:**

    ```bash
    npm run test
    ```

2.  **Run end-to-end tests:**

    To run the end-to-end tests, you'll need to have a valid `SLACK_WEBHOOK_URL` in your `.env` file.

    ```bash
    npm run test:e2e
    ```

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or create a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
