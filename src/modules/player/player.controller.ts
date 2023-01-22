import {
  CreatePlayerRequestBody,
  FastifyRequestWithPlayerInfo,
  GetPlayerInfoRequestParams
} from '@src/share/domain.share'
import { FastifyReply, FastifyRequest } from 'fastify'
import * as playerService from './player.service'
import { createPlayerError } from '@src/share/error.share'

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
    const internalError = createPlayerError(
      'Something went wrong while creating the player'
    )
    return { success: false, internalError }
  }
}
