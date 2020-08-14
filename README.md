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
