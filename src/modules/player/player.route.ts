import { RouteOptions } from 'fastify'
import * as playerController from '@modules/player/player.controller'

const playerRoutes = [
  {
    method: 'GET',
    url: '/players/:id',
    handler: playerController.getPlayerById,
  },
] as RouteOptions[]

export default playerRoutes
