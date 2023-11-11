import { RouteOptions } from 'fastify'
import { createMatch, getMatchById, getMatches } from './match.controller'

const matchRoutes = [
  {
    method: 'GET',
    url: '/matches/:matchId',
    handler: getMatchById
  },
  {
    method: 'GET',
    url: '/matches',
    handler: getMatches
  },
  {
    method: 'POST',
    url: '/matches',
    handler: createMatch
  }
] as RouteOptions[]

export default matchRoutes
