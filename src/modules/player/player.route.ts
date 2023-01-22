import { RouteOptions } from 'fastify'
import * as playerController from '@modules/player/player.controller'

const playerRoutes = [
  {
    method: 'GET',
    url: '/players/:playerId',
    handler: playerController.getPlayerById
  },
  {
    method: 'GET',
    url: '/players',
    handler: playerController.getPlayers
  },
  {
    method: 'POST',
    url: '/players',
    handler: playerController.createPlayer
  }
] as RouteOptions[]

export default playerRoutes
