import * as mysql from 'mysql2/promise'

export type Player = {
  playerId: number
  username: string
}

export type Playerpayload = {
  username: string
  password: string
}

export type PlayerDto = {
  playerId: number
  username: string
} & mysql.RowDataPacket
