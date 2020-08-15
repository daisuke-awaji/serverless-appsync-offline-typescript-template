# serverless-appsync-offline-typescript-template

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com) [![CircleCI](https://circleci.com/gh/daisuke-awaji/serverless-appsync-offline-typescript-template.svg?style=svg)](https://app.circleci.com/pipelines/github/daisuke-awaji/serverless-appsync-offline-typescript-template)

A Serverless Framework template that allows you to launch an AppSync emulator locally and proceed with development. Lambda Function build by TypeScript/Webpack.

Template features:
- [AppSync Simulator](https://github.com/bboure/serverless-appsync-simulator) built with [serverless-appsync-plugin](https://github.com/sid88in/serverless-appsync-plugin).
- Lambda Function written by TypeScript/Webpack.
- Localhosting functions with [Serverless Offline](https://github.com/dherault/serverless-offline).
- Unit testing example for VTL templates.
- Integrate testing example for AppSync Graphql Requests.
- CircleCI support.

### Usage

serverless create by this template

```
$ serverless create --template-url https://github.com/daisuke-awaji/serverless-appsync-offline-typescript-template --path myService
```

### Install

```
$ yarn install
```

### Setup

To run serverless offline, you need DynamoDB local.
Install dynamodb local .jar files

```
$ sls dynamodb install
```

### Development

```
$ sls offline start
```

### Test

Locally launch the AppSync emulator and run a test to send a GraphQL request. When the test is complete, the emulator will stop automatically.

```
$ yarn ci
```
