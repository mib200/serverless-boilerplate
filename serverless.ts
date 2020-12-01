import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: 'serverless-boilerplate',
  frameworkVersion: '2',
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
    },
    // webpack: {
    //   webpackConfig: './webpack.config.js',
    //   includeModules: true,
    //   forceExclude: ['aws-sdk'],
    // },
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'ap-south-1',
    memorySize: 128,
    versionFunctions: true,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  package: {
    individually: true,
    excludeDevDependencies: true,
    exclude: ['node_modules/aws-sdk/**'],
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
