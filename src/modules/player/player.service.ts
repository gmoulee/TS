import { Player, Playerpayload } from './player.domain'
import * as playerSqlService from './player.sql'

export const getPlayerById = async (
  playerId: number
): Promise<Player | null> => {
  const player = await playerSqlService.getPlayerById(playerId)
  return player
}

export const getPlayers = async (): Promise<Player[] | null> => {
  return playerSqlService.getPlayers()
}

export const createPlayer = async (
  playerInfo: Playerpayload
): Promise<void> => {
  return playerSqlService.createPlayer(playerInfo)
}
