'use strict';

const responseHandlers = require('./src/response-handlers');

module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      client: 'cookie',
      key: 'strapi.sid',
      prefix: 'strapi:sess:',
      ttl: 864000000,
      rolling: false,
      secretKeys: ['mySecretKey1', 'mySecretKey2'],
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 864000000,
        rewrite: true,
        signed: false,
      },
    },
  },
  // 'strapi::compression',
  // 'strapi::ip',
  {
    name: 'strapi::responses',
    config: {
      handlers: responseHandlers,
    },
  },
  'strapi::favicon',
  'strapi::public',
  {
    name: 'global::test-middleware',
    config: {
      foo: 'bar',
    },
  },
  {
    resolve: './src/custom/middleware.js',
    config: {},
  },
];
