require('dotenv').config()
import fastify from 'fastify'
import type { FastifyInstance as FastifyApp } from 'fastify'

import router from './plugins/router'

export function app(): FastifyApp {
  const app = fastify({
    ignoreDuplicateSlashes: true,
  })

  void app.register(router)
  return app
}
