import { DocumentClient } from 'aws-sdk/clients/dynamodb';

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    // region: 'localhost',
    endpoint: 'http://localhost:4566',
  };
}

export default new DocumentClient(options);
