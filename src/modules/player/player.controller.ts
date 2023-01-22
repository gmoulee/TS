import {
  CreatePlayerRequestBody,
  FastifyRequestWithPlayerInfo,
  GetPlayerInfoRequestParams
} from '@src/share/share.domain'
import { FastifyReply, FastifyRequest } from 'fastify'
import * as playerService from './player.service'

export const getPlayerById = async (
  request: FastifyRequestWithPlayerInfo<GetPlayerInfoRequestParams>,
  reply: FastifyReply
) => {
  const { playerId } = request.params
  try {
    const playerInfo = await playerService.getPlayerById(playerId)
    return reply.send({ success: true, playerInfo })
  } catch (error) {
    console.log('Error', error)
  }
}

export const getPlayers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const playersInfo = await playerService.getPlayers()
  return reply.send({ success: true, playersInfo })
}

export const createPlayer = async (
  request: FastifyRequestWithPlayerInfo<CreatePlayerRequestBody>,
  reply: FastifyReply
) => {
  const playerInfo = request.body
  try {
    await playerService.createPlayer(playerInfo)
    return { success: true }
  } catch (error) {
    throw new Error('Error while creating the player')
  }
}
