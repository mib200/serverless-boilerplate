import userSchema from '../models/user-schema.json';

module.exports = (config) => {
  return {
    'user-GET': {
      handler: 'modules/user/api/get.fn',
      events: [
        {
          http: {
            method: 'get',
            path: `${config.custom.urlBasePath}user`,
          },
        },
      ],
    },
    'user-UPDATE': {
      handler: 'modules/user/api/update.fn',
      events: [
        {
          http: {
            method: 'put',
            path: `${config.custom.urlBasePath}user/{id}`,
            request: {
              schema: {
                'application/json': userSchema,
              },
              parameters: {
                // querystrings: { url: true },
                // headers: { foo: false },
                paths: { id: true },
              },
              // passThrough: 'WHEN_NO_TEMPLATES',
              // contentHandling: 'CONVERT_TO_TEXT',
            },
            // documentation: {
            //   summary: 'Create something',
            //   description: 'Creates a user and then sends a generated password email',
            //   requestBody: {
            //     description: 'A user information object',
            //   },
            // },
          },
        },
      ],
    },
    'user-DELETE': {
      handler: 'modules/user/api/delete.fn',
      events: [
        {
          http: {
            method: 'delete',
            path: `${config.custom.urlBasePath}user`,
          },
        },
      ],
    },
  };
};
