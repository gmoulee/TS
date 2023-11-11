import {
  CreateMatchRequestBody,
  FastifyRequestWithMatchInfo,
  GetMatchInfoRequestParams
} from '@src/share/domain.share'
import * as matchService from '@modules/match/match.service'
import { FastifyReply, FastifyRequest } from 'fastify'

export const getMatches = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const matches = await matchService.getMatches()
  reply.send({ success: true })
}

export const getMatchById = async (
  request: FastifyRequestWithMatchInfo<GetMatchInfoRequestParams>,
  reply: FastifyReply
) => {
  const matche = {}
  reply.send({ success: true })
}

export const createMatch = async (
  request: FastifyRequestWithMatchInfo<CreateMatchRequestBody>,
  reply: FastifyReply
) => {
  const matches = []
  reply.send({ success: true })
}
