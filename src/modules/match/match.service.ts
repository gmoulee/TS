import { Match } from './match.domain'
import * as matchSqlService from './match.sql'

export const getMatches = async (): Promise<Match[]> => {
  return matchSqlService.getMatches()
}
