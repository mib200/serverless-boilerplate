module.exports = (config) => {
  return {
    'article-GET': {
      handler: 'modules/article/api/get.fn',
      events: [
        {
          http: {
            method: 'get',
            path: `${config.custom.urlBasePath}article`,
          },
        },
      ],
    },
    'article-UPDATE': {
      handler: 'modules/article/api/update.fn',
      events: [
        {
          http: {
            method: 'put',
            path: `${config.custom.urlBasePath}article`,
          },
        },
      ],
    },
    'article-DELETE': {
      handler: 'modules/article/api/delete.fn',
      events: [
        {
          http: {
            method: 'delete',
            path: `${config.custom.urlBasePath}article`,
          },
        },
      ],
    },
  };
};
