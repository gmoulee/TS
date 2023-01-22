import { FastifyRequest, RouteGenericInterface } from 'fastify'
import * as mysql from 'mysql2/promise'

export type FastifyRequestWithPlayerInfo<
  T extends RouteGenericInterface = RouteGenericInterface
> = FastifyRequest<T>

export type GetPlayerInfoRequestParams = {
  Params: {
    playerId: number
  }
}

export type CreatePlayerRequestBody = {
  Body: {
    username: string
    password: string
  }
}

export type QueryResults =
  | mysql.RowDataPacket[]
  | mysql.RowDataPacket[][]
  | mysql.OkPacket
  | mysql.OkPacket[]
  | mysql.ResultSetHeader

export type QueryParams = (
  | string
  | number
  | number[]
  | boolean
  | Date
  | QueryParams[]
)[]
