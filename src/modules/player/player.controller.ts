import { FastifyReply, FastifyRequest } from 'fastify'

export const getPlayerById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return reply.send({ success: true })
}
