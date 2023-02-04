import * as playerService from '@modules/player/player.service'
import * as playerSqlService from '@modules/player/player.sql'
import { PlayerDto } from '@modules/player/player.domain'

jest.mock('@modules/player/player.sql', () => ({
  getPlayers: jest.fn(),
  getPlayerById: jest.fn(),
  createPlayer: jest.fn()
}))

describe('Test Player service', () => {
  const mockPlayerSqlService = jest.mocked(playerSqlService)

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  describe(' Test getPlayerById', () => {
    beforeEach(() => {
      mockPlayerSqlService.getPlayerById.mockResolvedValue(null)
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('Given a playerId, when calling getPlayerById service, then getPlayerById sql service is called with id ', async () => {
      const playerId = 1
      await playerService.getPlayerById(playerId)

      expect(mockPlayerSqlService.getPlayerById).toHaveBeenCalledWith(playerId)
    })

    it('Given a playerId, when calling getPlayerById sql service returns a value, then return it', async () => {
      const playerId = 1
      const playerInfo = { playerId: 1, username: 'username' } as PlayerDto

      mockPlayerSqlService.getPlayerById.mockResolvedValue(playerInfo)

      const player = await playerService.getPlayerById(playerId)

      expect(player).toStrictEqual(playerInfo)
    })
  })

  describe('Test getPlayers', () => {
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

  describe('Test create player', () => {
    beforeEach(() => {
      mockPlayerSqlService.createPlayer.mockResolvedValue()
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('Given player payloadm, when createPlayer service is called, then createPlayer sql service is called with the payload', async () => {
      const playerPayload = {
        username: 'username',
        password: 'password'
      }

      await playerService.createPlayer(playerPayload)

      expect(mockPlayerSqlService.createPlayer).toHaveBeenCalledWith(
        playerPayload
      )
    })
  })
})
