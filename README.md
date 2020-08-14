# serverless-appsync-offline-typescript-template

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A Serverless Framework template that allows you to launch an AppSync emulator locally and proceed with development. Lambda Function build by TypeScript/Webpack. This is the data source to which the resolver connects.

### Usage

serverless create by this template

```
serverless create --template-url https://github.com/daisuke-awaji/serverless-appsync-offline-typescript-template --path myService
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
