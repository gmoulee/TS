import playerRoutes from '@src/modules/player/player.route'
import matchRoutes from '@src/modules/match/match.route'
import fastify, {
  FastifyInstance,
  FastifyPluginCallback,
  RouteOptions
} from 'fastify'

const routes = [...playerRoutes, ...matchRoutes] as RouteOptions[]

const router: FastifyPluginCallback = (
  fastify: FastifyInstance,
  _opts,
  done
) => {
  routes.forEach((route) => fastify.route(route))
  done()
}

export default router
