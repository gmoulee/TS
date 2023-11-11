import * as mysql from 'mysql2/promise'

export type Match = {
  matchId: number
  teamOne: string
  teamTwo: string
  winner: 'one' | 'two' | null
  scoreOne: number
  scoreTwo: number
  eventDateTime: string
}

export type MatchPayload = {
  teamOne: string
  teamTwo: string
  eventDateTime: string
}

export type MatchDto = Match & mysql.RowDataPacket
