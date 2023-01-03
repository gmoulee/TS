import { app } from './app'

export function server() {
  const server = app()

  server.listen({ port: Number(process.env.SERVER_PORT) }, (error, address) => {
    if (error) {
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })

  return server
}

try {
  server()
} catch (error) {
  console.log('Error')
}
