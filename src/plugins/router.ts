import playerRoutes from '@src/modules/player/player.route'
import fastify, {
  FastifyInstance,
  FastifyPluginCallback,
  RouteOptions,
} from 'fastify'

const routes = [...playerRoutes] as RouteOptions[]

const router: FastifyPluginCallback = (
  fastify: FastifyInstance,
  _opts,
  done
) => {
  routes.forEach((route) => fastify.route(route))
  done()
}

export default router
