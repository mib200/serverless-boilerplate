import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: 'serverless-boilerplate',
  frameworkVersion: '2',
  custom: {
    // webpack: {
    //   webpackConfig: './webpack.config.js',
    //   includeModules: true,
    //   forceExclude: ['aws-sdk'],
    // },
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-bundle', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'ap-south-1',
    // memorySize: 256,
    versionFunctions: true,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
