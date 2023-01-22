import { SqlManager } from '@src/plugins/db'
import { Player, PlayerDto, Playerpayload } from './player.domain'

const db = SqlManager.instance

export const getPlayers = async (): Promise<PlayerDto[]> => {
  return db.query<PlayerDto[]>(
    `
        SELECT 
            id_player as playerId,
            username 
        FROM
            mp_player;
    `
  )
}

export const getPlayerById = async (
  playerId: number
): Promise<PlayerDto | null> => {
  const [playerInfo = null] = await db.query<PlayerDto[]>(
    `
            SELECT
                id_player as playerId,
                username
            FROM
                mp_player
            WHERE
                id_player = ?
    `,
    [playerId]
  )

  return playerInfo
}

export const createPlayer = async (
  playerInfo: Playerpayload
): Promise<void> => {
  await db.query(
    `
            INSERT INTO 
                mp_player
            (username, password)
            VALUES
            (?,?)
    `,
    [playerInfo.username, playerInfo.password]
  )
}
