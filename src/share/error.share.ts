import { FastifyError } from 'fastify'

export const createPlayerError = (
  message: string,
  name = 'Bad Request',
  code = 400
): FastifyError => {
  return {
    name: name,
    code: code.toString(),
    statusCode: 400,
    message: message
  }
}
