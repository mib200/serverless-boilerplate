import type { Serverless } from 'serverless/aws';
const handlers = require('./serverless-dynamic.ts');

const serverlessConfiguration: Serverless = {
  service: 'serverless-boilerplate-service-b',
  frameworkVersion: '2',

  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'ap-southeast-1',
    memorySize: 128,
    versionFunctions: true,
    apiGateway: {
      restApiId: '{{resolve:ssm:/uat/core-services/api-gateway/REST-API-ID:1}}',
      restApiRootResourceId: '{{resolve:ssm:/uat/core-services/api-gateway/ROOT-RESOURCE-ID:1}}',
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

  custom: {
    urlBasePath: 'api/v1/',
    esbuild: {
      bundle: true,
      minify: true,
    },
    splitStacks: {
      nestedStackCount: 20,
      perFunction: false,
      perType: false,
      perGroupFunction: true,
    },
  },

  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-plugin-split-stacks'],
};

serverlessConfiguration.functions = handlers(serverlessConfiguration);

module.exports = serverlessConfiguration;
