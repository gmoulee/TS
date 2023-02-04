import * as playerService from '@modules/player/player.service'
import * as playerSqlService from '@modules/player/player.sql'
import { PlayerDto } from '@modules/player/player.domain'

jest.mock('@modules/player/player.sql', () => ({
  getPlayers: jest.fn()
}))

describe('Test Get Players service', () => {
  const mockPlayerSqlService = jest.mocked(playerSqlService)
  beforeEach(() => {
    mockPlayerSqlService.getPlayers.mockResolvedValue([])
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('Given nothing, when getPlayers service method is called, then the getPlayers sql service is called', async () => {
    await playerService.getPlayers()

    expect(mockPlayerSqlService.getPlayers).toHaveBeenCalled()
  })

  it('Given nothing, when getPlayers service method is called, then it returns the list of players', async () => {
    const players = { playerId: 1, username: 'username' } as PlayerDto
    mockPlayerSqlService.getPlayers.mockResolvedValue([players])

    const allPlayers = await playerService.getPlayers()
    expect(allPlayers).toStrictEqual([players])
  })
})
