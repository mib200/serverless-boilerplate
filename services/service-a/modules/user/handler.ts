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
            path: `${config.custom.urlBasePath}user`,
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
