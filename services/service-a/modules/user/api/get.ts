import type { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
// import * as clients from '@/services/shared/libs';
import middleware from '@/services/shared/middleware';
import Log from '@dazn/lambda-powertools-logger';

const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  Log.debug('this is a warning message');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User Get request here',
      event,
      context,
    }),
  };
};

export const fn = middleware(handler);
