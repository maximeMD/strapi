'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/connect/(.*)',
    handler: 'auth.connect',
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    },
  },
  {
    method: 'POST',
    path: '/auth/local',
    handler: 'auth.callback',
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    },
  },
  {
    method: 'POST',
    path: '/auth/local/register',
    handler: 'auth.register',
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    },
  },
  {
    method: 'GET',
    path: '/auth/:provider/callback',
    handler: 'auth.callback',
    config: {
      auth: false,
      prefix: '',
    },
  },
  {
    method: 'POST',
    path: '/auth/forgot-password',
    handler: 'auth.forgotPassword',
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    },
  },
  {
    method: 'POST',
    path: '/auth/reset-password',
    handler: 'auth.resetPassword',
    config: {
      auth: false,
      middlewares: ['plugin::users-permissions.rateLimit'],
      prefix: '',
    },
  },
  {
    method: 'GET',
    path: '/auth/email-confirmation',
    handler: 'auth.emailConfirmation',
    config: {
      auth: false,
      prefix: '',
    },
  },
  {
    method: 'POST',
    path: '/auth/send-email-confirmation',
    handler: 'auth.sendEmailConfirmation',
    config: {
      auth: false,
      prefix: '',
    },
  },
];
