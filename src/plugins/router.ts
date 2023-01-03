import fastify, {
  FastifyInstance,
  FastifyPluginCallback,
  RouteOptions,
} from 'fastify'

const routes = [] as RouteOptions[]

const router: FastifyPluginCallback = (
  fastify: FastifyInstance,
  _opts,
  done
) => {
  routes.forEach((route) => fastify.route(route))
  done()
}

export default router
