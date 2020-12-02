import type { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function fn(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'article Update request',
    }),
  };
}
